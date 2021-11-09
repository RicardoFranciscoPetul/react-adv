import React from 'react'
import { Link, useRouteMatch, Switch, Route, Redirect } from 'react-router-dom'
import { About, Home, Users } from '../pages'

const Navigation = () => {
  const { path, url } = useRouteMatch()
  return (
    <>
      <h2>LazyLoad Pages</h2>
      <ul>
        <li>
          <Link to={`${url}/about`}>About</Link>
        </li>
        <li>
          <Link to={`${url}/home`}>Home</Link>
        </li>
        <li>
          <Link to={`${url}/users`}>Users</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/about`}>
          <About />
        </Route>
        <Route exact path={`${path}/home`}>
          <Home />
        </Route>
        <Route exact path={`${path}/users`}>
          <Users />
        </Route>
        <Redirect to={`${path}/home`} />
      </Switch>
    </>
  )
}

export default Navigation
