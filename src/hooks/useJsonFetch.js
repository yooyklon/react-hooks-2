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
          if (response.status !== 200) {
            throw new Error('Ошибка ответа');
          } else {
            try {
              return response.json();
            } catch (e) {
              setError('Ошибка парсинга');
            }
          }
        })
        .then(data => setData(data))
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }
  }, [url, options]);

  return { data, error, loading };
}