import { useEffect, useState } from "react";
import { getCategories } from "../Services/APIs/categories";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const waitForData = async () => setCategories(await getCategories());
    waitForData();
  }, []);

  return { categories };
}
