import { ReactElement } from 'react'

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardProps {
  product: Product
  children?: ReactElement | ReactElement[]
}

export interface Product {
  id: string
  title: string
  img?: string
}