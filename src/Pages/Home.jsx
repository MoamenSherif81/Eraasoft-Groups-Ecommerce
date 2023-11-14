import { Fragment, useEffect, useState } from "react";
import MainCarousel from "../Components/MainCarousel/MainCarousel";
import ProductSection from "../Components/ProductSection/ProductSection";
import { getProducts } from "../Services/APIs/products";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const waitForData = async () => setProducts(await getProducts(1));
    waitForData();
  }, []);

  return (
    <Fragment>
      <MainCarousel />
      <ProductSection
        products={products.slice(0, 10)}
        title={"Latest Products"}
      />
      <ProductSection products={products.slice(10, 20)} title={"Offers"} />
    </Fragment>
  );
}
