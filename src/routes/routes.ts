import { lazy, LazyExoticComponent } from 'react'

const About = lazy(()=> import(/* webpackChunkName: "About" */'../01-lazyLoad/pages/About'))
const Home = lazy(()=> import(/* webpackChunkName: "Home" */'../01-lazyLoad/pages/Home'))
const Users = lazy(()=> import(/* webpackChunkName: "Users" */'../01-lazyLoad/pages/Users'))

type JSXComponent= ()=> JSX.Element

interface Route{
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[]
}


export const routes: Route[] = [
  {
    path: '/about',
    Component: About,
    name: 'About'
  },
  {
    path: '/home',
    Component: Home,
    name: 'Home'
  },
  {
    path: '/users',
    Component: Users,
    name: 'Users'
  }
]