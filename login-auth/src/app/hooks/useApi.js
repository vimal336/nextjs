import { useState } from "react";
import { getAuthToken } from "../utils/helperfn";
import url from "../constants/url";
import env from "../constants/env";

const baseUrl = env.NEXT_PUBLIC_BACKEND_URL;

function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const apiFn = async ({ endpoint = url.login, options = {} }) => {
    const authToken = getAuthToken();

    try {
      const fullUrl = `${baseUrl}${endpoint}`;
      const headers = {
        "Content-Type": "application/json",
        ...options.headers,
      };

      if (authToken) {
        headers["Authorization"] = `Bearer ${authToken}`;
      }

      setLoading(true); 

      const response = await fetch(fullUrl, {
        ...options,
        headers,
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized");
        }

        const errorData = await response.json();
        throw new Error(errorData?.message || "An error occurred");
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err.message || "An error occurred");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    apiFn,
  };
}

export default useApi;
