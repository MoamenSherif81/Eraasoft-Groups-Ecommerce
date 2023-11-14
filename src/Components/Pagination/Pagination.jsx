import { PropTypes } from "prop-types";
import "./Pagination.css";
import { nanoid } from "nanoid";
import { useEffect } from "react";

export default function Pagination({ total_count, page, setPage, perPage }) {
  function generatePaginationElements() {
    let elements = [];
    for (let i = 0; i < Math.ceil(total_count / perPage); i++) {
      elements.push(
        <button key={nanoid()} className={`pagination_btn ${page == i + 1 ? 'active':''}`} onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      );
    }

    return elements;
  }
  const paginationElements = generatePaginationElements();

  useEffect(() => {
    // if(page > Math.ceil(total_count / perPage)){
    //   setPage(1);
    // }
  }, [total_count])

  return (
    <div className="d-flex justify-content-center gap-3">
      {paginationElements}
    </div>
  );
}

Pagination.propTypes = {
  total_count: PropTypes.any,
  page: PropTypes.any,
  setPage: PropTypes.any,
  perPage: PropTypes.any,
};
