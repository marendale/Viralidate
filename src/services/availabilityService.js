import { db } from '../config/firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, where } from "firebase/firestore";

// Function to add an availability slot
export const addAvailabilitySlot = async (slotDetails) => {
  try {
    const docRef = await addDoc(collection(db, "Availability"), slotDetails);
    console.log("New availability slot added with ID: ", docRef.id);
    return docRef.id; // Optionally return the new slot's document ID
  } catch (e) {
    console.error("Error adding availability slot: ", e);
    throw new Error("Failed to add availability slot.");
  }
};

/**
 * Fetches availability slots based on optional filters.
 * 
 * @param {Object} filters - An object containing filters for the query.
 * @param {string} [filters.professionalId] - Optional. Professional's ID to filter slots by.
 * @param {string} [filters.severityLevel] - Optional. Severity level to filter slots by.
 * @param {boolean} [filters.onlyAvailable=true] - Optional. Whether to fetch only available slots.
 * @returns {Promise<Array>} A promise that resolves to an array of slot objects.
 */
export const fetchAvailabilitySlots = async ({ professionalId = null, severityLevel = null, onlyAvailable = true } = {}) => {
  let queryConstraints = [];
  // Filter by professional ID if provided
  if (professionalId) {
    queryConstraints.push(where("healthcareProfessionalID", "==", professionalId));
  }
  // Filter by severity level if provided
  if (severityLevel) {
    queryConstraints.push(where("severityLevelAccepted", "==", severityLevel));
  }
  // Fetch only available slots by default
  if (onlyAvailable) {
    queryConstraints.push(where("status", "==", "Available"));
  }
  const slotsRef = collection(db, "availability");
  const q = query(slotsRef, ...queryConstraints);
  const querySnapshot = await getDocs(q);
  let slots = [];
  querySnapshot.forEach(doc => {
    slots.push({ id: doc.id, ...doc.data() });
  });
  return slots;
};


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
