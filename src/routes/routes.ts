import { lazy, LazyExoticComponent } from 'react'

const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyLayout" */'../01-lazyLoad/Layout/LazyLayout'))

type JSXComponent= ()=> JSX.Element

interface Route{
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[]
}


export const routes: Route[] = [
  {
    path: '/lazy-layout',
    Component: LazyLayout,
    name: 'LazyLayout'
  },
]