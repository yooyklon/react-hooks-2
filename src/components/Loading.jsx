import React from "react";

import useJsonFetch from "../hooks/useJsonFetch";

export default function Loading() {
  const { data, error, loading } = useJsonFetch(
    "http://localhost:7070/loading"
  );
  console.log(`LOADING data: ${data} error: ${error} loading: ${loading}`);
  return <div>Loading</div>;
}
