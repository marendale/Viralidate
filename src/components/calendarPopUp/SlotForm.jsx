/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './SlotForm.css';

const SlotForm = ({ slotDetails, isEditing, onClose, onSave }) => {
  const [slot, setSlot] = useState({
    healthcareFacilityID: slotDetails?.healthcareFacilityID || '',
    healthcareProfessionalID: slotDetails?.healthcareProfessionalID || '',
    severityLevelAccepted: slotDetails?.severityLevelAccepted || '',
    startTime: slotDetails?.startTime || '',
    endTime: slotDetails?.endTime || '',
    status: slotDetails?.status || 'Available',
  });

  const getCurrentDateTimeLocal = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };
  

  // Update the form state when the edit mode is activated with new slot details
  useEffect(() => {
    if (slotDetails) {
      setSlot(prevSlot => ({
        ...prevSlot,
        healthcareFacilityID: slotDetails.healthcareFacilityID,
        healthcareProfessionalID: slotDetails.healthcareProfessionalID,
        severityLevelAccepted: slotDetails.severityLevelAccepted,
        startTime: slotDetails.startTime,
        endTime: slotDetails.endTime,
        status: slotDetails.status,
      }));
    }
  }, [slotDetails]);

  useEffect(() => {
    // If slotDetails is provided and it's a new slot , autopopulate the IDs
    if (slotDetails && !isEditing) {
      setSlot(prevSlot => ({
        ...prevSlot,
        healthcareFacilityID: slotDetails.healthcareFacilityID,
        healthcareProfessionalID: slotDetails.healthcareProfessionalID
      }));
    }
  }, [slotDetails, isEditing]);
  

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSlot(prevSlot => ({
      ...prevSlot,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(slot);
    onClose(); // Close the modal upon saving
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="healthcareFacilityID">Healthcare Facility ID</label>
          <input
            name="healthcareFacilityID"
            value={slot.healthcareFacilityID}
            onChange={handleChange}
            readOnly
          />

          <label htmlFor="healthcareProfessionalID">Healthcare Professional ID</label>
          <input
            name="healthcareProfessionalID"
            value={slot.healthcareProfessionalID}
            onChange={handleChange}
            readOnly
          />

          <label htmlFor="severityLevelAccepted">Severity Level Accepted</label>
          <select
            name="severityLevelAccepted"
            value={slot.severityLevelAccepted}
            onChange={handleChange}
            required
          >
            <option value="">Select Severity Level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

         
  <label htmlFor="startTime">Start Time</label>
  <input
    type="datetime-local"
    name="startTime"
    value={slot.startTime}
    onChange={handleChange}
    min={getCurrentDateTimeLocal()}
    required
  />

  <label htmlFor="endTime">End Time</label>
  <input
    type="datetime-local"
    name="endTime"
    value={slot.endTime}
    onChange={handleChange}
    min={slot.startTime || getCurrentDateTimeLocal()} // Ensure end time is after start time
    required
  />

          <label htmlFor="status">Status</label>
          <select
            name="status"
            value={slot.status}
            onChange={handleChange}
          >
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>

          <button type="submit">{isEditing ? 'Update Slot' : 'Add Slot'}</button>
        </form>
      </div>
    </div>
  );
};

export default SlotForm;