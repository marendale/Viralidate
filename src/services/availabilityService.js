/* eslint-disable no-unused-vars */
import { db } from '../config/firebaseConfig';
import { collection, addDoc, getDoc, getDocs, updateDoc, doc, deleteDoc, query, where } from "firebase/firestore";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';

// Function to fetch the current logged-in admin's profile
let cachedAdminProfile = null;

export async function getCurrentUserAdminProfile() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("No user logged in");
    return null;
  }

  // Return cached profile if it exists
  if (cachedAdminProfile && cachedAdminProfile.id === user.uid) {
    return cachedAdminProfile;
  }

  try {
    const adminProfileRef = doc(db, "adminProfile", user.uid);
    const docSnap = await getDoc(adminProfileRef);

    if (docSnap.exists()) {
      console.log("Admin profile data:", docSnap.data());
      // Cache and return the profile data
      cachedAdminProfile = { id: docSnap.id, ...docSnap.data() };
      return cachedAdminProfile;
    } else {
      console.log("No such document for admin profile");
      return null;
    }
  } catch (error) {
    console.error("Error fetching admin profile:", error);
    throw new Error("Failed to fetch admin profile.");
  }
}



// Function to add an availability slot
export const addAvailabilitySlot = async (slotDetails) => {
  try {
    const adminProfile = await getCurrentUserAdminProfile();
    if (!adminProfile) throw new Error("Admin profile not found.");

    const combinedSlotDetails = {
      ...slotDetails,
      healthcareFacilityID: adminProfile.clinicCode, // Auto-populate this from admin's profile
      healthcareProfessionalID: adminProfile.id // Use admin's UID as professional ID
    };

    const docRef = await addDoc(collection(db, "Availability"), combinedSlotDetails);
    console.log("New availability slot added with ID:", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding availability slot:", e);
    throw new Error("Failed to add availability slot.");
  }
};


/**
 * Fetches availability slots based on the current admin's healthcare facility ID.
 */

export const fetchAvailabilitySlots = async (filters) => {
  try {
    const adminProfile = await getCurrentUserAdminProfile();
    if (!adminProfile) throw new Error("Admin profile not found.");

    let q = query(collection(db, "Availability"), 
      where("healthcareFacilityID", "==", adminProfile.clinicCode),
      where("healthcareProfessionalID", "==", adminProfile.id),
      where("status", "==", "Available"));

    // Include severity level filter
    if (filters.severityLevel) {
      q = query(q, where("severityLevelAccepted", "==", filters.severityLevel));
    }

    const querySnapshot = await getDocs(q);
    const now = new Date();
    return querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(slot => new Date(slot.endTime) > now); // Exclude expired slots
  } catch (e) {
    console.error("Error fetching availability slots:", e);
    throw new Error("Failed to fetch availability slots.");
  }
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
