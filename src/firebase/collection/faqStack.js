import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { message } from "antd";

// Fetch user Privacy stack from Firestore
export const getUserPrivacy = async () => {
  try {
    const faqCollection = collection(db, "UserPrivacy");
    const querySnapshot = await getDocs(faqCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getUserFAQs = async () => {
  try {
    const faqCollection = collection(db, "UserFaqs");
    const querySnapshot = await getDocs(faqCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getAssociateFAQs = async () => {
  try {
    const faqCollection = collection(db, "associateFaqs");
    const querySnapshot = await getDocs(faqCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getAssociatePrivacy = async () => {
  try {
    const faqCollection = collection(db, "associatePrivacyTerms");
    const querySnapshot = await getDocs(faqCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getDriverPrivacy = async () => {
  try {
    const faqCollection = collection(db, "driverPrivacy");
    const querySnapshot = await getDocs(faqCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getDriverBenefits = async () => {
  try {
    const faqCollection = collection(db, "driverBenefits");
    const querySnapshot = await getDocs(faqCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Update user privacy
export const updateUserPrivacy = async (id, updatedData) => {
  try {
    const docRef = doc(db, "UserPrivacy", id);
    await updateDoc(docRef, updatedData);
    message.success("Document updated successfully");
    // console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

// Update user FAQs
export const updateUserFAQs = async (id, updatedData) => {
  try {
    const docRef = doc(db, "UserFaqs", id);
    await updateDoc(docRef, updatedData);
    message.success("Document updated successfully");
    // console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

// Update associate FAQs
export const updateAssociateFAQs = async (id, updatedData) => {
  try {
    const docRef = doc(db, "associateFaqs", id);
    await updateDoc(docRef, updatedData);
    message.success("Document updated successfully");
    // console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

// Update associate privacy terms
export const updateAssociatePrivacy = async (id, updatedData) => {
  try {
    const docRef = doc(db, "associatePrivacyTerms", id);
    await updateDoc(docRef, updatedData);
    message.success("Document updated successfully");
    // console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

// Update driver privacy
export const updateDriverPrivacy = async (id, updatedData) => {
  try {
    const docRef = doc(db, "driverPrivacy", id);
    await updateDoc(docRef, updatedData);
    message.success("Document updated successfully");
    // console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

// Update driver benefits
export const updateDriverBenefits = async (id, updatedData) => {
  try {
    const docRef = doc(db, "driverBenefits", id);
    await updateDoc(docRef, updatedData);
    message.success("Document updated successfully");
    // console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

// Delete a faqs from Firestore by ID
export const deleteUserPrivacy = async (id) => {
  try {
    const privacyDoc = doc(db, "UserPrivacy", id);
    await deleteDoc(privacyDoc);
  } catch (error) {
    console.error("Error deleting user privacy:", error);
    throw error;
  }
};
export const deleteUserFAQs = async (faqIds) => {
  try {
    const deletePromises = faqIds.map(async (id) => {
      const faqDocRef = doc(db, "UserFaqs", id);
      await deleteDoc(faqDocRef);
    });
    await Promise.all(deletePromises);
    message.success("Selected FAQs deleted successfully");
    // console.log("Selected FAQs deleted successfully");
  } catch (error) {
    console.error("Error deleting FAQs:", error);
    throw error;
  }
};

export const deleteAssociateFAQs = async (faqIds) => {
  try {
    const deletePromises = faqIds.map(async (id) => {
      const faqDocRef = doc(db, "associateFaqs", id);
      await deleteDoc(faqDocRef);
    });

    await Promise.all(deletePromises);
    console.log("Selected FAQs deleted successfully");
  } catch (error) {
    console.error("Error deleting FAQs:", error);
    throw error;
  }
};