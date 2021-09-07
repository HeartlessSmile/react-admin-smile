
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { getMenus } from "../../routers/router"
const { Header } = Layout;
function CEPHeader() {
  const history = useHistory()
  const [current, setcurrent] = useState('/home')
  const [menuList] = useState(getMenus());
  const handleClick = (e: any) => {
    let cur = menuList.find(el => el.path === e.key)
    let path = cur?.redirect || e.key
    history.push(path)
  }
  useEffect(() => {
    let str: String = history.location.pathname.split('/')[1]
    setcurrent('/' + str)
  }, [history])

  return (
    <Header className="cep-layout-header">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {
          menuList.map(el => {
            return (
              <Menu.Item key={el.path} >
                {el.name}
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Header>
  );
}

export default CEPHeader;
