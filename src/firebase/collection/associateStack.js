import { db } from "../config/firebase";
import { message } from "antd";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
  limitToLast,
  endBefore,
  where,
} from "firebase/firestore";

// Fetch associate users from Firestore
export const getAssociateUsers = async (
  lastVisibleDoc = null,
  firstVisibleDoc = null,
  pageSize = 10,
  isNextPage = true
) => {
  try {
    const usersCollection = collection(db, "associateUser");
    let usersQuery;
    usersQuery = query(
      usersCollection,
      orderBy("createdAt", "desc"),
      limit(pageSize)
    );

    if (isNextPage && lastVisibleDoc) {
      usersQuery = query(
        usersCollection,
        orderBy("createdAt", "desc"),
        startAfter(lastVisibleDoc),
        limit(pageSize)
      );
    } else if (!isNextPage && firstVisibleDoc) {
      // For previous page, use limitToLast instead of reversing
      usersQuery = query(
        usersCollection,
        orderBy("createdAt", "desc"),
        endBefore(firstVisibleDoc),
        limitToLast(pageSize)
      );
    }
    const querySnapshot = await getDocs(usersQuery);
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    const firstVisible = querySnapshot.docs[0];

    const totalUsersSnapshot = await getDocs(collection(db, "associateUser"));
    const totalUsersCount = totalUsersSnapshot.size;
    return {
      users,
      lastVisible,
      firstVisible,
      totalUsersCount,
      pageSize,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Delete associate user from Firestore by ID
export const deleteAssociateUser = async (userId) => {
  try {
    const userDocRef = doc(db, "associateUser", userId);
    await deleteDoc(userDocRef);
    message.success("User deleted successfully.");
    console.log(`User with ID ${userId} deleted successfully.`);
  } catch (error) {
    message.error("Error deleting user. Please try again.");
    console.error("Error deleting user:", error);
    throw error;
  }
};

// Update status to "active" for associate user
export const updateAssociateStatus = async (userId, newStatus) => {
  try {
    const userDocRef = doc(db, "associateUser", userId);
    await updateDoc(userDocRef, {
      status: newStatus, // Update the status field to active or unactive
    });
    // console.log(`Status for user with ID ${userId} updated to ${newStatus}.`);
    message.success(`User status updated to ${newStatus}`);
  } catch (error) {
    // console.error("Error updating user status:", error);
    message.error("Failed to update status.");
    throw error;
  }
};

// Block/unBlock
export const blockAssociateUser = async (userId) => {
  try {
    const userRef = doc(db, "associateUser", userId);
    await updateDoc(userRef, {
      status: "blocked",
      updatedAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error blocking user:", error);
    throw error;
  }
};

export const unblockAssociateUser = async (userId) => {
  try {
    const userRef = doc(db, "associateUser", userId);
    await updateDoc(userRef, {
      status: "active",
      updatedAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error unblocking user:", error);
    throw error;
  }
};

export const updateAssociateProfile = async (userId, updatedData) => {
  try {
    const userDocRef = doc(db, "associateUser", userId);
    await updateDoc(userDocRef, updatedData);
    // message.success("Profile updated successfully.");
    // console.log(`Profile for user with ID ${userId} updated successfully.`);
  } catch (error) {
    // console.error("Error updating profile:", error);
    message.error("Failed to update profile. Please try again.");
    throw error;
  }
};

// Search for users
export const searchUsers = async (searchTerm) => {
  const q = query(
    collection(db, "associateUser"),
    // where("Name", "==", searchTerm),
    where("Name", ">=", searchTerm),
    where("Name", "<=", searchTerm + "\uf8ff")
  );

  const querySnapshot = await getDocs(q);
  const users = [];

  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });

  return { users };
};