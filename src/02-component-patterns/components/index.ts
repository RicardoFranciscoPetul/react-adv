import ProductCardHOC from './ProductCard';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductCounter from './ProductCounter';


const ProductCard = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Counter: ProductCounter
})

export default ProductCard