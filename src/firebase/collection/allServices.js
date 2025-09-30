import { db } from "../config/firebase";
import { collection, getDocs, doc,getDoc } from "firebase/firestore";

// Fetch all request services from Firestore requestServices collection
export const getAllServices = async () => {
  try {
    const activeCollection = collection(db, "requestServices");
    const querySnapshot = await getDocs(activeCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Fetch all service detail from Firestore allServices collection
export const getServiceDetail = async () => {
  try {
    const activeCollection = collection(db, "allServices");
    const querySnapshot = await getDocs(activeCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Fetch all service provider uid  detail from Firestore serviceProviderTrustedContact collection
export const getServiceProivderDetail = async () => {
  try {
    const activeCollection = collection(db, "serviceProviderTrustedContact");
    const querySnapshot = await getDocs(activeCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Fetch all service requests with client and service details
export const fetchDetails = async () => {
  try {
    // Fetch all service requests from the requestServices collection
    const servicesCollection = collection(db, "requestServices");
    const querySnapshot = await getDocs(servicesCollection);

    // Loop through each service request
    const serviceRequests = await Promise.all(
      querySnapshot.docs.map(async (docSnap) => {
        const serviceData = docSnap.data();

        // Check if service data exists
        if (!serviceData) {
          console.log(`Service data not found for document ID: ${docSnap.id}`);
          return null;
        }

        const serviceUid = serviceData.serviceUid;
        const clientUid = serviceData.clientUid;

        // Fetch service details using serviceUid from allServices collection
        const serviceDocRef = doc(db, "allServices", serviceUid);
        const serviceDocSnap = await getDoc(serviceDocRef);
        const serviceDetails = serviceDocSnap.exists()
          ? serviceDocSnap.data()
          : null;


        if (!serviceDetails || !serviceDetails.uid) {
          console.log(
            `Missing details for serviceUid: ${serviceUid} or clientUid: ${clientUid}`
          );
        }

        return {
          service: serviceDetails,
          detail: serviceData, 
        };
      })
    );

    return serviceRequests.filter((request) => request !== null);
  } catch (error) {
    console.error("Error fetching service requests with details:", error);
    throw error;
  }
};
