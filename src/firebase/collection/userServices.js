import { db } from "../config/firebase";
import axios from "axios";
import {
  collection,
  doc,
  getDocs,
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

export const getAllUsers = async (
  lastVisibleDoc = null,
  firstVisibleDoc = null,
  pageSize = 10,
  isNextPage = true
) => {
  try {
    const usersCollection = collection(db, "clientUser");
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
    // No need to reverse the docs anymore
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    const firstVisible = querySnapshot.docs[0];

    const totalUsersSnapshot = await getDocs(collection(db, "clientUser"));
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

export const deleteUser = async (userId) => {
  try {
    // Step 1: Delete from Firestore
    const userDoc = doc(db, "clientUser", userId);
    await deleteDoc(userDoc);

    // Step 2: Delete from Firebase Authentication via your backend
    await axios.post("http://localhost:3000/delete-user", { uid: userId });

    return true;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export const updateUserDetails = async (userId, data) => {
  try {
    const userRef = doc(db, "clientUser", userId);
    await updateDoc(userRef, data);
    console.log("User details updated successfully");
  } catch (error) {
    console.error("Error updating user details:", error);
    throw error;
  }
};

// Block/unBlock
export const blockUser = async (userId) => {
  try {
    const userRef = doc(db, "clientUser", userId);
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

export const unblockUser = async (userId) => {
  try {
    const userRef = doc(db, "clientUser", userId);
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

// Search for users
export const searchUsers = async (searchTerm) => {
  const q = query(
    collection(db, "clientUser"),
    where("name", ">=", searchTerm),
    where("name", "<=", searchTerm + "\uf8ff")
  );

  const querySnapshot = await getDocs(q);
  const users = [];

  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });

  return { users };
};
