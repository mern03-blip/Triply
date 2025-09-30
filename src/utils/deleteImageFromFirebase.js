import { deleteObject, ref } from "firebase/storage";
import { storage } from "../firebase/config/firebase";

export const deleteImage = async (imageUrl) => {
  try {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
    console.info("Image deleted successfully");
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};
