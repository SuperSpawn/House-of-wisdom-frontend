import { useState } from "react";
import axios from "axios";

const useDeleteFunction = (url) => {
  const [responseData, setResponseData] = useState(null);

  const deleteRequest = async (accessToken) => {
    try {
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setResponseData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return { responseData, deleteRequest };
};

export default useDeleteFunction;
