import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore();
const collectionName = "driverStack";
const exceptionId = "1rWMAMXr0kTGxXWCHEsn9XyPDXG2";

const deleteAllExceptOne = async () => {
  const querySnapshot = await getDocs(collection(db, collectionName));

  const deletePromises = querySnapshot.docs
    .filter((document) => document.id !== exceptionId)
    .map((document) => deleteDoc(doc(db, collectionName, document.id)));

  await Promise.all(deletePromises);

  console.log("All records deleted except:", exceptionId);
};

export default deleteAllExceptOne;
