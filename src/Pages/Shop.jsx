import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { PRODUCTS_PER_PAGE, getProductsPaginated } from "../Services/APIs/products";
import ProductList from "../Components/ProductList/ProductList";
import Pagination from "../Components/Pagination/Pagination";
import ProductsFilters from "../Components/ProductsFilters/ProductsFilters";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [filtersQueryUrl, setFiltersQueryUrl] = useState("");

  useEffect(() => {
    const waitForData = async () => setProducts(await getProductsPaginated(page, filtersQueryUrl));
    waitForData();
  }, [page, filtersQueryUrl]);

  return (
    <Container className="my-5">
      <ProductsFilters setPage={setPage} setFiltersQueryUrl={setFiltersQueryUrl} />
      <ProductList products={products} />
      <Pagination
        total_count={products.headers ? products.headers["x-total-count"] : ""}
        page={page}
        setPage={setPage}
        perPage={PRODUCTS_PER_PAGE}
      />
    </Container>
  );
}
