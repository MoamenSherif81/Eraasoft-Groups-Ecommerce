import { PropTypes } from "prop-types";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import { Fragment } from "react";

export default function ProductList({ products }) {
  
  return (
    <Fragment>
      <Row>
        {products?.data?.map((product) => {
          return (
            <Col md={3} key={product.id} className="mb-4">
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
}

ProductList.propTypes = {
  products: PropTypes.any,
};
