import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const deleteUser = async ({ userId, collectionName }) => {
  const response = await axios.delete(
    "https://deleteuser-qark55cbva-uc.a.run.app/",
    {
      data: {
        userId,
        collectionName,
      },
    }
  );
  return response.data;
};

const useDelete = () => {
  return useMutation({
    mutationFn: deleteUser,
  });
};

export default useDelete;