import React from 'react';
import { Layout } from 'antd';
import Header from './components/header';
import Sider from './components/sider';
import Content from "./components/content";
import "./index.less"
function CEPLayout() {
  return (
    <Layout className="cep-layout">
      <Header />
      <Layout className="cep-content-layout">
        <Sider />
        <Content />
      </Layout>
    </Layout>
  );
}

export default CEPLayout;
