import "./ProductsFilters.css";
import { PropTypes } from "prop-types";
import useProductsFilter from "../../hooks/useProductsFilter";
import useCategories from "../../hooks/useCategories";

export default function ProductsFilters({ setFiltersQueryUrl, setPage }) {
  const { filters, submitHandler, handleResetForm, handleFilterChange } =
    useProductsFilter(setFiltersQueryUrl, setPage);

  const {categories} = useCategories();

  return (
    <form onSubmit={submitHandler} className="d-flex w-100 gap-3 mb-4">
      <input
        name="q"
        value={filters.q}
        className="shop__filter-input"
        type="text"
        placeholder="Search..."
        onChange={handleFilterChange}
      />
      <select
        onChange={handleFilterChange}
        name="category"
        value={filters.category}
        className="shop__filter-input"
      >
        <option value="">Choose an option...</option>
        {categories.map((ele, idx) => {
          return (
            <option key={`cat_${idx}`} value={ele}>
              {ele}
            </option>
          );
        })}
      </select>
      <input
        name="price_gte"
        className="shop__filter-input"
        value={filters.price_gte}
        type="number"
        placeholder="min price"
        onChange={handleFilterChange}
      />
      <input
        name="price_lte"
        className="shop__filter-input"
        value={filters.price_lte}
        type="number"
        placeholder="max price"
        onChange={handleFilterChange}
      />
      <input className="btn btn-primary" type="submit" />
      <input
        className="btn btn-primary"
        onClick={handleResetForm}
        type="button"
        value="reset"
      />
    </form>
  );
}

ProductsFilters.propTypes = {
  setFiltersQueryUrl: PropTypes.any,
  setPage: PropTypes.any,
};
