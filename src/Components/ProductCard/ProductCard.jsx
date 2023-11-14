import { Button, Card } from 'react-bootstrap'
import './ProductCard.css'
import { PropTypes } from "prop-types";
import { AiFillHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem } from '../../rtk/slices/cartSlice';

export default function ProductCard({product}) {
  const dispatch = useDispatch();

  function handleAddToCart(){
    dispatch(addItem(product))
  }

  return (
    <Card className='w-100'>
      <Card.Img className='product-card__img' variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
        <div className='d-flex gap-2 w-100'>
          <Button variant="primary" className='w-100' onClick={handleAddToCart}>Add to cart</Button>
          <Button variant="danger" className='fs-5'><AiFillHeart /></Button>
        </div>
      </Card.Body>
    </Card>
  )
}

ProductCard.propTypes = {
  product: PropTypes.any,
}