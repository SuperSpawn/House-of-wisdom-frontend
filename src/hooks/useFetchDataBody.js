import { useState, useMemo, useCallback, useEffect } from "react";
import axios from "axios";

const useFetchDataBody = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [source, setSource] = useState(null);

  const fetchData = useCallback(
    async (body) => {
      setLoading(true);
      try {
        const cancelToken = axios.CancelToken;
        const cancelSource = cancelToken.source();
        setSource(cancelSource);

        const response = await axios.get(url, {
          cancelToken: cancelSource.token,
          body,
        });
        setData(response.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(true);
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    return () => {
      if (source) {
        source.cancel("Request cancelled by user");
      }
    };
  }, [source]);

  const memoizedFetchData = useMemo(() => fetchData, [fetchData]);

  return { loading, error, data, fetchData: memoizedFetchData };
};

export default useFetchDataBody;
