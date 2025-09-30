import {
  collection,
  getDocs,
  query,
  orderBy,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";


// Function to format the timestamp into a readable format
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleString(); 
};

// Fetch notifications
export const fetchNotifications = async () => {
  try {
    const notificationsRef = collection(db, "notificationForAdmin");

    // Order notifications by creation time (newest first)
    const q = query(notificationsRef, orderBy("createdAt", "desc"));

    const querySnapshot = await getDocs(q);
    const notifications = [];

    querySnapshot.forEach((doc) => {
      const notificationData = doc.data();
      if (notificationData) {
        notificationData.title = `New user added: - Welcome aboard!`;
      }

      // Format the timestamp
      if (notificationData.createdAt) {
        notificationData.time = formatTimestamp(notificationData.createdAt);
      }

      notifications.push({ id: doc.id, ...notificationData });
    });
    // console.log("notifications", notifications);
    return notifications;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};

// Mark all notifications as read
export const markAllAsRead = async () => {
  try {
    const notificationsRef = collection(db, "notificationForAdmin");
    const querySnapshot = await getDocs(notificationsRef);

    querySnapshot.forEach(async (docSnap) => {
      const notificationDoc = doc(db, "notificationForAdmin", docSnap.id);
      await updateDoc(notificationDoc, { isRead: true });
    });
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
    throw error;
  }
};
