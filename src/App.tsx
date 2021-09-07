import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from './routers'
import { RouteItem } from "./types/route"

function App() {
  return (
    <Switch>
      {routes.map((route: RouteItem, i: Number) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          render={(props) => {
            // 可以设置一些检查状态 如登陆状态
            if (route.redirect && !route.component) {
              return <Redirect to={{ pathname: route.redirect }} />
            }
            if (route.noinspect && route.component) {
              return <route.component {...props} route={route} />
            }
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
          }}
        />
      ))}
    </Switch>

  )
}

export default App