/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const SlotForm = ({ slotDetails, isEditing, onClose, onSave }) => {
  const [slot, setSlot] = useState({
    healthcareFacilityID: '',
    healthcareProfessionalID: '',
    severityLevelAccepted: '',
    startTime: '',
    endTime: '',
    status: 'Available', // Default status
  });

  useEffect(() => {
    if (isEditing && slotDetails) {
      setSlot(slotDetails);
    }
  }, [isEditing, slotDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSlot(prevSlot => ({
      ...prevSlot,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(slot);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="healthcareFacilityID">Healthcare Facility ID</label>
          <input
            name="healthcareFacilityID"
            value={slot.healthcareFacilityID}
            onChange={handleChange}
            required
          />

          <label htmlFor="healthcareProfessionalID">Healthcare Professional ID</label>
          <input
            name="healthcareProfessionalID"
            value={slot.healthcareProfessionalID}
            onChange={handleChange}
            required
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
            required
          />

          <label htmlFor="endTime">End Time</label>
          <input
            type="datetime-local"
            name="endTime"
            value={slot.endTime}
            onChange={handleChange}
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
