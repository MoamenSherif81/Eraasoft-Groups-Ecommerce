import { useState } from "react";

export default function useProductsFilter(setFiltersQueryUrl, setPage) {
  const [filters, setFilters] = useState({
    q: "",
    category: "",
    price_gte: "",
    price_lte: "",
  });

  function handleResetForm() {
    setFilters({
      q: "",
      category: "",
      price_gte: "",
      price_lte: "",
    });
    setPage(1);
    setFiltersQueryUrl("");
  }

  function handleFilterChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    let filtersQuery = [];
    for (let key in filters) {
      if (filters[key] != "") {
        filtersQuery.push(`${key}=${filters[key]}`);
      }
    }
    setPage(1);
    setFiltersQueryUrl(filtersQuery.join("&"));
  }

  return {
    filters,
    handleFilterChange,
    handleResetForm,
    submitHandler,
  };
}
