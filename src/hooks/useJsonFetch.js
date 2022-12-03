import { useEffect, useState } from "react";

export default function useJsonFetch(url, options) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    if (options) {
      fetch(url, options);
    } else {
      fetch(url)
        .then(response => {
          try {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          } catch (e) {
            setError(e.message);
          }
        })
        .then(data => setData(data))
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }
  }, [url, options]);

  return { data, error, loading };
}