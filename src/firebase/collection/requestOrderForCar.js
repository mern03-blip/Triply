import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

// Fetch reuqest orders from Firestore requestOrdersForCar collection
export const getRequestOrders = async () => {
  try {
    const requestCollection = collection(db, "RequestOrdersForCar");
    const querySnapshot = await getDocs(requestCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
