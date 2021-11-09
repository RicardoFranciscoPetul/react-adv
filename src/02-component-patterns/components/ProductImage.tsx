import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

const ProductImage = ({ image = '' }) => {
  const {
    product: { img, title }
  } = useContext(ProductContext)

  let imgToShow: string

  if (image) {
    imgToShow = image
  } else if (img) {
    imgToShow = img
  } else {
    imgToShow = noImage
  }

  return <img src={imgToShow} alt={title} className={styles.productImg} />
}

export default ProductImage
