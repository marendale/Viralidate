/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { addAvailabilitySlot, fetchAvailabilitySlots, deleteSlot, updateAvailabilitySlot, getCurrentUserAdminProfile } from '../../services/availabilityService';
import ConfirmationModal from '../../components/confirmation/ConfirmationModal';
import './AvailabilityManager.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import SlotForm from '../../components/calendarPopUp/SlotForm';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import Navbar from '../../components/navbar/Navbar';


const AvailabilityManager = () => {
  const initialFilters = {
    severityLevel: '',
    onlyAvailable: true,
  };

  // Get the current date and time in ISO format, and then convert it to the local datetime format required for the input field.
  const now = new Date().toISOString().slice(0, 16);
  const [slots, setSlots] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [currentAction, setCurrentAction] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editSlotId, setEditSlotId] = useState('');
  const [currentView, setCurrentView] = useState('dayGridMonth');
  const [adminProfile, setAdminProfile] = useState({ healthcareFacilityID: '', healthcareProfessionalID: '' });
  const [newSlot, setNewSlot] = useState({
    endTime: '',
    healthcareFacilityID: '',
    healthcareProfessionalID: '',
    severityLevelAccepted: '',
    startTime: '',
    status: 'Available',
  });

  const getSeverityColor = useCallback((severityLevel) => {
    switch (severityLevel) {
      case 'Low': return '#28a745'; // Green
      case 'Medium': return '#ffc107'; // Yellow
      case 'High': return '#dc3545'; // Red
      default: return '#007bff'; // Default 
    }
  }, []);

  const formatEventsForCalendar = useCallback((slots) => {
    return slots.map(slot => ({
      id: slot.id,
      title: `Facility ID: ${slot.healthcareFacilityID}, Severity: ${slot.severityLevelAccepted}`,
      start: slot.startTime,
      end: slot.endTime,
      color: getSeverityColor(slot.severityLevelAccepted), // Apply color based on severity
      extendedProps: { ...slot }, // Store all slot info for editing
      classNames: ['custom-event'] // Add custom class name
    }));
  }, [getSeverityColor]);

  useEffect(() => {
    const fetchAndSetAdminProfile = async () => {
      const profile = await getCurrentUserAdminProfile();
      if (profile) {
        setAdminProfile(profile);
        setNewSlot(prev => ({
          ...prev,
          healthcareFacilityID: profile.clinicCode,
          healthcareProfessionalID: profile.id
        }));
      }
    };

    fetchAndSetAdminProfile();
  }, []);

  useEffect(() => {
    const loadSlots = async () => {
      const fetchedSlots = await fetchAvailabilitySlots({
        healthcareFacilityID: adminProfile?.clinicCode,
        ...filters
      });
      setSlots(fetchedSlots);
    };

    if (adminProfile?.clinicCode) {
      loadSlots();
    }
  }, [filters, adminProfile?.clinicCode, getSeverityColor]);

  const onEventClick = useCallback(({ event }) => {
    const { extendedProps } = event;
    setIsEditing(true); // Set editing mode to true
    setEditSlotId(extendedProps.id); // Set the ID of the slot being edited
    setNewSlot({ // Set the slot data into the state, ready to be passed to the SlotForm
      endTime: extendedProps.endTime,
      healthcareFacilityID: extendedProps.healthcareFacilityID,
      healthcareProfessionalID: extendedProps.healthcareProfessionalID,
      severityLevelAccepted: extendedProps.severityLevelAccepted,
      startTime: extendedProps.startTime,
      status: extendedProps.status,
    });
    setShowFormModal(true); // Open the SlotForm modal
  }, []);


  const displaySuccessMessage = (message) => {
    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Exclude auto-populated fields from the validation check
    if (!newSlot.endTime || !newSlot.severityLevelAccepted || !newSlot.startTime || !newSlot.status) {
      setModalMessage('Please fill in all fields except auto-populated ones.');
      setShowConfirmModal(true);
      return;
    }

    try {
      const adminProfile = await getCurrentUserAdminProfile();
      const slotToSubmit = {
        ...newSlot,
        healthcareFacilityID: adminProfile?.clinicCode,
        healthcareProfessionalID: adminProfile?.id,
      };

      if (isEditing) {
        await updateAvailabilitySlot(editSlotId, slotToSubmit);
        displaySuccessMessage('Slot updated successfully.');
      } else {
        await addAvailabilitySlot(slotToSubmit);
        displaySuccessMessage('Slot added successfully.');
      }

      setIsEditing(false);
      setEditSlotId('');
      setSlots(await fetchAvailabilitySlots({ healthcareFacilityID: adminProfile?.clinicCode }));

      // Reset fields except for the auto-populated ones
      setNewSlot(prev => ({
        ...prev,
        endTime: '',
        severityLevelAccepted: '',
        startTime: '',
        status: 'Available',
      }));
    } catch (error) {
      console.error('Error submitting the slot:', error);
    }
  };

  const handleSave = async (slotData) => {
    if (isEditing) {
      await updateAvailabilitySlot(editSlotId, slotData);
      displaySuccessMessage('Slot updated successfully.');
    } else {
      await addAvailabilitySlot(slotData);
      displaySuccessMessage('Slot added successfully.');
    }
    setShowFormModal(false); // Hide the form modal
    setIsEditing(false); // Reset editing state
    // Fetch updated slots list
    const updatedSlots = await fetchAvailabilitySlots({ healthcareFacilityID: adminProfile.clinicCode });
    setSlots(updatedSlots);
  };

  const handleEdit = async (slotId) => {
    const slot = slots.find(s => s.id === slotId);
    setIsEditing(true);
    setEditSlotId(slotId);

    const adminProfile = await getCurrentUserAdminProfile();

    setNewSlot({
      endTime: slot.endTime,
      healthcareFacilityID: adminProfile?.clinicCode, // Repopulate automatically
      healthcareProfessionalID: adminProfile?.id, // Repopulate automatically
      severityLevelAccepted: slot.severityLevelAccepted,
      startTime: slot.startTime,
      status: slot.status,
    });
  };

  const onDateClick = useCallback((info) => {
    const clickedDate = new Date(info.dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to remove time part

    // Check if the clicked date is before today
    if (clickedDate < today) {
      alert("You cannot select a past date.");
      return; // Do nothing if the date is in the past
    }

    setIsEditing(false);
    setEditSlotId('');
    setNewSlot({
      healthcareFacilityID: adminProfile.clinicCode,
      healthcareProfessionalID: adminProfile.id,
      severityLevelAccepted: '',
      startTime: info.dateStr,
      endTime: '',
      status: 'Available',
    });
    setShowFormModal(true); // Set showFormModal to true to display the SlotForm modal only for future dates
  }, [adminProfile.healthcareFacilityID, adminProfile.healthcareProfessionalID]);

  const handleDeleteClick = (slotId) => {
    setModalMessage('Are you sure you want to delete this slot?');
    setCurrentAction(() => async () => {
      await handleDelete(slotId);
      setShowConfirmModal(false); // Ensure modal is closed after deletion
      setShowFormModal(false); // Close the slot form if it's open
    });
    setShowConfirmModal(true);
  };

  const handleDelete = async (slotId) => {
    await deleteSlot(slotId);
    setSlots(await fetchAvailabilitySlots(filters)); // Refresh the slots list
    displaySuccessMessage('Slot deleted successfully.'); // Show success message
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const handleUpdate = async (updatedSlotData) => {
    try {
      await updateAvailabilitySlot(editSlotId, updatedSlotData);
      displaySuccessMessage('Slot updated successfully.');
      // Close the form and refresh the slots
      setShowFormModal(false);
      setSlots(await fetchAvailabilitySlots({ healthcareFacilityID: adminProfile?.clinicCode }));
    } catch (error) {
      console.error('Error updating the slot:', error);

    }
  };

  const handleAdd = async (newSlotData) => {
    try {
      await addAvailabilitySlot(newSlotData);
      displaySuccessMessage('Slot added successfully.');
      // Close the form and refresh the slots
      setShowFormModal(false);
      setSlots(await fetchAvailabilitySlots({ healthcareFacilityID: adminProfile?.clinicCode }));
    } catch (error) {
      console.error('Error adding the slot:', error);

    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="availability-container">
          {/* Displaying IDs as text at the top */}
          <div className="admin-profile-info">
            <h2>Availability Manager</h2>
            <p><strong>Healthcare Facility ID:</strong> {adminProfile.clinicCode}</p>
            <p><strong>Healthcare Professional ID:</strong> {adminProfile.id}</p>
            <p><strong>First Name:</strong> {adminProfile.firstName}</p>
            <p><strong>Last Name:</strong> {adminProfile.lastName}</p>
          </div>
          {showSuccessMessage && <div className="success-message">{successMessage}</div>}
          <h2>{isEditing ? 'Edit Availability Slot' : 'Add New Availability Slot'}</h2>
          <form onSubmit={handleSubmit} className="availability-form">
          </form>

          {/* Filters UI */}
          <div className="filters-ui">
            <select
              value={filters.severityLevel}
              onChange={(e) => setFilters({ ...filters, severityLevel: e.target.value })}
            >
              <option value="">Select Severity Level</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <label>
              Only show available slots
              <input
                id='onlyAvailable'
                type="checkbox"
                checked={filters.onlyAvailable}
                onChange={(e) => setFilters({ ...filters, onlyAvailable: e.target.checked })}
              />
            </label>
            <button onClick={resetFilters} className="reset-filters">Reset Filters</button>
          </div>

          {/* View Selector Dropdown */}
          <div className="view-selector">
            <label htmlFor="calendar-view">Choose a view: </label>
            <select
              id="calendar-view"
              value={currentView}
              onChange={(e) => setCurrentView(e.target.value)}
            >
              <option value="dayGridMonth">Month</option>
              <option value="timeGridWeek">Week</option>
              <option value="timeGridDay">Day</option>
            </select>
          </div>

          {showFormModal && (
            <SlotForm
              slotDetails={newSlot}
              isEditing={isEditing}
              onClose={() => setShowFormModal(false)}
              onSave={isEditing ? handleUpdate : handleAdd}
              onDelete={() => handleDeleteClick(editSlotId)}
            />
          )}

          <FullCalendar
            key={currentView}
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
            initialView={currentView}
            events={formatEventsForCalendar(slots)}
            eventClick={onEventClick}
            dateClick={onDateClick}
            editable={true}
            dayCellDidMount={({ date, el }) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0); // Normalize today's date
              if (date < today) {
                // This day is in the past
                el.style.backgroundColor = '#f1f1f1'; // Grey out the background
              }
            }}
          />

          {/* Confirmation modal */}
          <ConfirmationModal
            isOpen={showConfirmModal}
            onClose={() => setShowConfirmModal(false)}
            onConfirm={() => {
              currentAction && currentAction(); // This will delete and close the modal
            }}
            message={modalMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default AvailabilityManager;