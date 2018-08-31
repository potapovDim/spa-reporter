import React, {Component} from 'react'
import {Provider} from 'react-redux'
import ReactDom from 'react-dom'

import store from './reducers'

import Menu from './ui/menu'
import Layout from './ui/layout'

class Page extends Component {
  render() {
    return (
      <div className="">
        <Menu />
        <Layout />
      </div>
    )
  }
}

ReactDom.render(
  <Provider store={store}>
    <Page />
  </Provider>, document.getElementById('app'))