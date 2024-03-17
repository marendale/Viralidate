import { db } from '../config/firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, where } from "firebase/firestore";

// Function to add an availability slot
export const addAvailabilitySlot = async (slotDetails, healthcareFacilityID) => {
  try {
    // Include the healthcareFacilityID in the slot details
    const docRef = await addDoc(collection(db, "Availability"), {
      ...slotDetails,
      healthcareFacilityID, // Assuming this ID is passed when calling this function
    });
    console.log("New availability slot added with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding availability slot: ", e);
    throw new Error("Failed to add availability slot.");
  }
};

/**
 * Fetches availability slots based on optional filters.
 * Assumes the current user's healthcare facility ID is known and passed as part of the filters.
 */
export const fetchAvailabilitySlots = async ({ healthcareFacilityID = null, severityLevel = null, onlyAvailable = true } = {}) => {
  let queryConstraints = [];
  if (healthcareFacilityID) {
    queryConstraints.push(where("healthcareFacilityID", "==", healthcareFacilityID));
  }
  if (severityLevel) {
    queryConstraints.push(where("severityLevelAccepted", "==", severityLevel));
  }
  if (onlyAvailable) {
    queryConstraints.push(where("status", "==", "Available"));
  }
  const slotsRef = collection(db, "Availability");
  const q = query(slotsRef, ...queryConstraints);
  const querySnapshot = await getDocs(q);
  let slots = [];
  querySnapshot.forEach(doc => {
    slots.push({ id: doc.id, ...doc.data() });
  });
  return slots;
};

// Functions to delete and update an availability slot remain unchanged.



// Function to delete an availability slot
export const deleteSlot = async (slotId) => {
  try {
    await deleteDoc(doc(db, "Availability", slotId));
    console.log("Availability slot deleted successfully");
  } catch (e) {
    console.error("Error deleting availability slot: ", e);
    throw new Error("Failed to delete availability slot.");
  }
};


// Function to update an availability slot by its ID
export const updateAvailabilitySlot = async (slotId, updatedSlotDetails) => {
  try {
    const slotRef = doc(db, "Availability", slotId);
    await updateDoc(slotRef, updatedSlotDetails);
    console.log("Availability slot updated successfully");
  } catch (e) {
    console.error("Error updating availability slot: ", e);
    throw new Error("Failed to update availability slot.");
  }
};
