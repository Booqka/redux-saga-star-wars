import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
} from 'react-router-dom'
import { Breadcrumb, Icon, Layout, Menu } from 'antd'
import StarshipsList from './pages/StarshipsList'
import StarshipsItem from './pages/StarshipsItem'
const { Header, Content, Footer } = Layout

export default function App() {

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          />
        </Header>
        <Content style={{ padding: '40px 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <Route path="/:id/">
                <StarshipsItem/>
              </Route>
              <Route path="/">
                <StarshipsList/>
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Booqka</Footer>
      </Layout>
    </Router>
  )
}


