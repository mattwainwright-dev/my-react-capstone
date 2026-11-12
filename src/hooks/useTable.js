import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export function useTable(tableName) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const { data, error } = await supabase.from(tableName).select("*");

      if (error) {
        setError(error.message);
      } else {
        setData(data);
        setError(null);
      }

      setLoading(false);
    }

    fetchData();
  }, [tableName]);

  return { data, loading, error };
}
