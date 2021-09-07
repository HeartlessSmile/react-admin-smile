import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import { getContentMenus } from "../../routers/router"
const { Content } = Layout
function CEPContent() {
  const [arr] = useState(getContentMenus())
  return (
    <Content>
      <Switch>
        {arr.map((route: any, i: Number) => (
          <Route
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            render={(props) => {
              return <route.component {...props} route={route} />
            }}
          />
        ))}
      </Switch>
    </Content>
  );
}

export default CEPContent;
