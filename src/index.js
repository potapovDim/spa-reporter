import React, {Component} from 'react'
import {Provider} from 'react-redux'
import ReactDom from 'react-dom'

import store from './reducers/report'

import Menu from './ui/menu'
import Layout from './ui/layout'

class Page extends Component {
  render() {
    return (
      <div>
        <Layout />
        <Menu />
      </div>
    )
  }
}

ReactDom.render(
  <Provider store={store}>
    <Page />
  </Provider>, document.getElementById('app'))