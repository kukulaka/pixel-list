import React from 'react';
import { Layout } from 'antd';
import Main from './containers/main';
import TitleHeader from './components/styled/title-header';
import './App.css';



const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header style={{height:"8vh"}}><TitleHeader text="List Manager"/>
      </Header>
      <Content>
      <Main/>
     </Content>
      <Footer style={{height:"8vh", textAlign:"center"}}><strong>Tanya Byrne</strong></Footer>
    </Layout> 
  )

}

export default App;