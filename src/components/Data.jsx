import React from "react";

import useJsonFetch from "../hooks/useJsonFetch";

export default function Data() {
  const { data, error, loading } = useJsonFetch("http://localhost:7070/data");
  console.log(`DATA data: ${data} error: ${error} loading: ${loading}`);
  return <div>Data</div>;
}
