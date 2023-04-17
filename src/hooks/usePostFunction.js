import { useState } from "react";
import axios from "axios";

const usePostFunction = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);

  const makePostRequest = async (data, token) => {
    try {
      setLoading(true);
      const request = {};
      if (token) {
        request.headers = {
          Authorization: `Bearer ${token}`,
        };
      }
      const res = await axios.post(url, data, request);
      setLoading(false);
      if (res.success === false) {
        setError(true);
      }
      setResponse(res);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return { loading, error, response, makePostRequest };
};

export default usePostFunction;
