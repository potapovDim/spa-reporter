import React, {Component} from 'react'
import {Provider} from 'react-redux'
import ReactDom from 'react-dom'
import './ui/style/main.scss'
import store from './reducers'

import Menu from './ui/menu'
import Layout from './ui/layout'
import DynamicController from './dynamic/dynamic_controler'

class Page extends Component {
  render() {
    return (
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
    )
  }
}

ReactDom.render(
  <Provider store={store}>
    <Page />
  </Provider>, document.getElementById('app'))