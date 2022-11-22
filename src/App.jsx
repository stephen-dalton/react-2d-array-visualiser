import { useState } from "react";
import { Layout } from "antd";

const { Header, Footer, Conetnt } = Layout;

import "./App.css";
import { Content } from "antd/es/layout/layout";

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
