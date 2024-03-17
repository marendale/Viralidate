/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { addAvailabilitySlot, fetchAvailabilitySlots, deleteSlot, updateAvailabilitySlot, getCurrentUserAdminProfile } from '../../services/availabilityService';
import ConfirmationModal from '../../components/confirmation/ConfirmationModal';
import './AvailabilityManager.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';


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
  const [modalMessage, setModalMessage] = useState('');
  const [currentAction, setCurrentAction] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editSlotId, setEditSlotId] = useState('');
  const [adminProfile, setAdminProfile] = useState({ healthcareFacilityID: '', healthcareProfessionalID: '' });
  const [newSlot, setNewSlot] = useState({
    endTime: '',
    healthcareFacilityID: '',
    healthcareProfessionalID: '',
    severityLevelAccepted: '',
    startTime: '',
    status: 'Available',
  });

  

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
        healthcareFacilityID: adminProfile?.clinicCode, // Use adminProfile.clinicCode as fetched from getCurrentUserAdminProfile
        ...filters // Include current filters in the fetch function
      });
      setSlots(fetchedSlots);
    };
  
    if (adminProfile?.clinicCode) {
      loadSlots();
    }
  }, [filters, adminProfile?.clinicCode]); // Dependency on filters and adminProfile.clinicCode ensures re-fetching when these change
  



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
  

  const handleDeleteClick = (slotId) => {
    setModalMessage('Are you sure you want to delete this slot?');
    setCurrentAction(() => () => handleDelete(slotId));
    setShowConfirmModal(true);
  };

  const handleDelete = async (slotId) => {
    await deleteSlot(slotId);
    setSlots(await fetchAvailabilitySlots(filters));
    setShowConfirmModal(false);
    displaySuccessMessage('Slot deleted successfully.');
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <div className="availability-container">
      {showSuccessMessage && <div className="success-message">{successMessage}</div>}
      <h2>{isEditing ? 'Edit Availability Slot' : 'Add New Availability Slot'}</h2>
      <form onSubmit={handleSubmit} className="availability-form">
        <input
          className="form-input"
          placeholder="Healthcare Facility ID"
          value={newSlot.healthcareFacilityID}
          onChange={(e) => setNewSlot({ ...newSlot, healthcareFacilityID: e.target.value })}
          required
        />
        <input
          className="form-input"
          placeholder="Healthcare Professional ID"
          value={newSlot.healthcareProfessionalID}
          onChange={(e) => setNewSlot({ ...newSlot, healthcareProfessionalID: e.target.value })}
          required
        />
        <input
    className="form-input"
    type="datetime-local"
    value={newSlot.startTime}
    onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
    min={now} // Prevent past dates for start time
    required
        />
        <input
    className="form-input"
    type="datetime-local"
    value={newSlot.endTime}
    onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
    min={newSlot.startTime || now} // Ensure end time is after start time or now
    required
        />
        <select
          className="form-select"
          value={newSlot.severityLevelAccepted}
          onChange={(e) => setNewSlot({ ...newSlot, severityLevelAccepted: e.target.value })}
          required
        >
          <option value="">Select Severity Level</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          className="form-select"
          value={newSlot.status}
          onChange={(e) => setNewSlot({ ...newSlot, status: e.target.value })}
        >
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
        <button type="submit" className="submit-btn">{isEditing ? 'Update Slot' : 'Add Slot'}</button>
        {isEditing && (
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setEditSlotId('');
              setNewSlot({
                endTime: '',
                healthcareFacilityID: '',
                healthcareProfessionalID: '',
                severityLevelAccepted: '',
                startTime: '',
                status: 'Available',
              });
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
        )}
      </form>
  
      {/* Adjusted Filters UI to remove the timeframe filters */}
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
            type="checkbox"
            checked={filters.onlyAvailable}
            onChange={(e) => setFilters({ ...filters, onlyAvailable: e.target.checked })}
          />
        </label>
        <button onClick={resetFilters} className="reset-filters">Reset Filters</button>
      </div>
  
      {/* List of slots */}
      <ul className="slots-list">
        {slots.map(slot => (
          <li key={slot.id} className="slot-item">
            {`Facility ID: ${slot.healthcareFacilityID}, Professional ID: ${slot.healthcareProfessionalID}, Timeframe: ${slot.startTime} to ${slot.endTime}, Severity: ${slot.severityLevelAccepted}, Status: ${slot.status}`}
            <button onClick={() => handleEdit(slot.id)}>Edit</button>
            <button onClick={() => handleDeleteClick(slot.id)}>Delete</button>
          </li>
        ))}
      </ul>
  
      {/* Confirmation modal */}
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={() => {
          currentAction && currentAction();
          setShowConfirmModal(false);
        }}
        message={modalMessage}
      />
    </div>
  );
  
};

export default AvailabilityManager;