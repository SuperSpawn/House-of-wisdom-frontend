import { useState, useEffect, useMemo, useCallback } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [cancelToken, setCancelToken] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const source = axios.CancelToken.source();
      setCancelToken(source);
      const response = await axios.get(url, { cancelToken: source.token });
      setData(response.data);
      setLoading(false);
    } catch (err) {
      if (!axios.isCancel(err)) {
        setError(true);
        console.error(err);
      }
    }
  }, [url]);

  useEffect(() => {
    const cleanup = () => {
      if (cancelToken) {
        cancelToken.cancel("Request canceled by cleanup function.");
      }
    };
    return cleanup;
  }, [cancelToken]);

  const memoizedFetchData = useMemo(() => fetchData, [fetchData]);

  return { loading, error, data, fetchData: memoizedFetchData };
};

export default useFetchData;
