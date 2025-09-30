import { db } from "../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

// Fetch documents with 'statusOfRequest' set to 'inProgress' from both collections
export const getInProgressData = async () => {
  try {
    // Reference to collections
    const requestServicesCollection = collection(db, "requestServices");
    const requestOrdersForCarCollection = collection(db, "RequestOrdersForCar");

    // Queries to filter documents with 'statusOfRequest' as 'inProgress'
    const requestServicesQuery = query(
      requestServicesCollection,
      where("statusOfRequest", "==", "inProgress")
    );
    const requestOrdersForCarQuery = query(
      requestOrdersForCarCollection,
      where("statusOfRequest", "==", "inProgress")
    );

    // Execute queries
    const [servicesSnapshot, ordersSnapshot] = await Promise.all([
      getDocs(requestServicesQuery),
      getDocs(requestOrdersForCarQuery),
    ]);

    // Map results
    const servicesData = servicesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      collection: "requestServices",
    }));
    const ordersData = ordersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      collection: "RequestOrdersForCar",
    }));

    // Combine results
    // return [...servicesData, ...ordersData];
    // Combine results
    const combinedData = [...servicesData, ...ordersData];

    // Log the results to the console
    // console.log("In-Progress Data:", combinedData);

    return combinedData;
  } catch (error) {
    console.error("Error fetching in-progress data:", error);
    throw error;
  }
};
