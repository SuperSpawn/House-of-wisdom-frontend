import { useState } from "react";
import axios from "axios";

const usePutAuthFunction = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const putData = async (url, token, newData) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.put(url, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return { loading, error, data, putData };
};

export default usePutAuthFunction;
