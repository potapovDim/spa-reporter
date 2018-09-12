import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
// reducers - redux
import store from './reducers'
// main components
import Menu from './ui/menu'
import Layout from './ui/layout'
// dynamic charts
import DynamicController from './dynamic/dynamic_controler'
// style
import './ui/style/main.scss'
// top nav component
import {TopNav} from './header-navigation'

class Page extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className="main__content">
          <div className="menu__content">
            <Menu />
          </div>
          <div className="layout__content">
            <Layout />
          </div>
          <div>
            <DynamicController />
          </div>
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <Provider store={store}>
    <Page />
  </Provider>, document.getElementById('app'))