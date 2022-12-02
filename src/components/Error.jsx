import React from "react";

import useJsonFetch from "../hooks/useJsonFetch";

export default function Error() {
  const { data, error, loading } = useJsonFetch("http://localhost:7070/error");
  console.log(`ERROR data: ${data} error: ${error} loading: ${loading}`);
  return <div>Error</div>;
}
