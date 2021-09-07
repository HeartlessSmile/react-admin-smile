import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { getSiderMenus } from '../../routers/router'
import { RouteItem } from "../../types/route"

const { Sider } = Layout;
const { SubMenu } = Menu;

function CEPHeader() {
  const history = useHistory()
  const [current, setcurrent] = useState('')
  const [collapsed, setcollapsed] = useState(false)
  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed)
    setcollapsed(collapsed)
  }
  const renderMenu = (menu: Array<RouteItem>) => {
    return menu.filter(el => el.isShowSider).map((el: RouteItem) => {
      if (el.children && el.children.length > 0) {
        return (<SubMenu key={el.path} title={el.name}>
          {renderMenu(el.children.filter(item => item.isShowSider))}
        </SubMenu>)
      } else {
        return <Menu.Item key={el.path}>{el.name}</Menu.Item>
      }
    })
  }
  const handleClick = (e: any) => {
    history.push(e.key)
    setcurrent(e.key)
  }
  useEffect(() => {
    console.log('111')
    setcurrent(history.location.pathname)
  }, [history]);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" selectedKeys={[current]} mode="inline" onClick={handleClick}>
        {renderMenu(getSiderMenus('/' + history.location.pathname.split('/')[1]))}
      </Menu>
    </Sider>
  );
}

export default CEPHeader;
