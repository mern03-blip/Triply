import { db } from "../config/firebase";
import { message } from "antd";
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

export const getDriverStack = async (
  lastVisibleDoc = null,
  firstVisibleDoc = null,
  pageSize = 10,
  isNextPage = true
) => {
  try {
    const driverCollection = collection(db, "driverStack");
    let usersQuery;
    usersQuery = query(
      driverCollection,
      orderBy("createdAt", "desc"),
      limit(pageSize)
    );

    if (isNextPage && lastVisibleDoc) {
      usersQuery = query(
        driverCollection,
        orderBy("createdAt", "desc"),
        startAfter(lastVisibleDoc),
        limit(pageSize)
      );
    } else if (!isNextPage && firstVisibleDoc) {
      // For previous page, use limitToLast instead of reversing
      usersQuery = query(
        driverCollection,
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

    const totalUsersSnapshot = await getDocs(collection(db, "driverStack"));
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

// Delete a driver from Firestore by ID
export const deleteDriver = async (driverId) => {
  try {
    const driverDoc = doc(db, "driverStack", driverId); // Reference to the document
    await deleteDoc(driverDoc); // Delete the document
    message.success("Driver record deleted successfully.");
  } catch (error) {
    message.error("Error deleting driver record. Please try again.");
    console.error("Error deleting driver:", error);
    throw error; // Throw the error for further handling
  }
};

// Update status to "active" for a driver in Firestore
export const updateDriverStatus = async (driverId, newStatus) => {
  try {
    const driverDocRef = doc(db, "driverStack", driverId); // Get the reference to the driver document
    await updateDoc(driverDocRef, {
      status: newStatus, // Update the status field to active or inactive
    });
    console.log(
      `Status for driver with ID ${driverId} updated to ${newStatus}.`
    );
    message.success(`Driver status updated to ${newStatus}`);
  } catch (error) {
    console.error("Error updating driver status:", error);
    message.error("Failed to update status.");
    throw error;
  }
};

// Block/unBlock
export const blockDriver = async (userId) => {
  try {
    const userRef = doc(db, "driverStack", userId);
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

export const unblockDriver = async (userId) => {
  try {
    const userRef = doc(db, "driverStack", userId);
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

// update driver profile
export const updateDriverProfile = async (driverId, updatedData) => {
  try {
    const driverDocRef = doc(db, "driverStack", driverId);
    await updateDoc(driverDocRef, updatedData);
  } catch (error) {
    console.error("Error updating driver profile:", error);
    message.error(error.message);
    throw error;
  }
};
// Search for users
export const searchUsers = async (searchTerm) => {
  const q = query(
    collection(db, "driverStack"),
    // where("fullName", "==", searchTerm) ,
    where("fullName", '>=', searchTerm),
    where("fullName", '<=', searchTerm + '\uf8ff')
  );

  const querySnapshot = await getDocs(q);
  const users = [];

  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });

  return { users };
};