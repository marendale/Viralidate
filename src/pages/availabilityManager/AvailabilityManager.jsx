/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { addAvailabilitySlot, fetchAvailabilitySlots, deleteSlot, updateAvailabilitySlot } from '../../services/availabilityService';
import ConfirmationModal from '../../components/confirmation/ConfirmationModal';
import './AvailabilityManager.css';

const AvailabilityManager = () => {
  // Initial state for the filters
  const initialFilters = {
    healthcareFacilityID: '', // Using healthcareFacilityID instead of professionalId
    severityLevel: '',
    onlyAvailable: true,
  };

  const [slots, setSlots] = useState([]);
  const [filters, setFilters] = useState(initialFilters);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [currentAction, setCurrentAction] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editSlotId, setEditSlotId] = useState('');
  const [newSlot, setNewSlot] = useState({
    endTime: '',
    healthcareFacilityID: '',
    healthcareProfessionalID: '',
    severityLevelAccepted: '',
    startTime: '',
    status: 'Available',
  });

  useEffect(() => {
    const loadSlots = async () => {
      const fetchedSlots = await fetchAvailabilitySlots(filters);
      setSlots(fetchedSlots);
    };
    loadSlots();
  }, [filters]);

  const displaySuccessMessage = (message) => {
    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!newSlot.endTime || !newSlot.healthcareFacilityID || !newSlot.healthcareProfessionalID || !newSlot.severityLevelAccepted || !newSlot.startTime || !newSlot.status) {
      setModalMessage('Please fill in all fields.');
      setShowConfirmModal(true);
      return;
    }
  
    try {
      if (isEditing) {
        await updateAvailabilitySlot(editSlotId, newSlot);
        displaySuccessMessage('Slot updated successfully.');
        setIsEditing(false);
        setEditSlotId('');
      } else {
        await addAvailabilitySlot(newSlot);
        displaySuccessMessage('Slot added successfully.');
      }
      setSlots(await fetchAvailabilitySlots(filters));
      setNewSlot({
        endTime: '',
        healthcareFacilityID: '',
        healthcareProfessionalID: '',
        severityLevelAccepted: '',
        startTime: '',
        status: 'Available',
      });
    } catch (error) {
      console.error('Error submitting the slot:', error);
    }
  };

  const handleEdit = (slotId) => {
    const slot = slots.find(s => s.id === slotId);
    setIsEditing(true);
    setEditSlotId(slotId);
    setNewSlot({
      endTime: slot.endTime,
      healthcareFacilityID: slot.healthcareFacilityID,
      healthcareProfessionalID: slot.healthcareProfessionalID,
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
          required
        />
        <input
          className="form-input"
          type="datetime-local"
          value={newSlot.endTime}
          onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
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
  
      {/* Filters UI */}
      <div className="filters-ui">
  <input
    type="text"
    placeholder="Filter by Healthcare Facility ID"
    value={filters.healthcareFacilityID}
    onChange={(e) => setFilters({ ...filters, healthcareFacilityID: e.target.value })}
  />
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