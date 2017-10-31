import React, { Component } from 'react';
import { Provider } from 'react-redux'
import ReactDom from 'react-dom';

import store from './reducers/report'


import { Menu } from './ui/menu'
import { Layout } from './ui/layout'

class Page extends Component {
  componentDidMount() {

  };
  render() {
    return (
      <div >
        <Menu />
        <Layout />
        <div >Test </div>
      </div>
    );
  };
};

ReactDom.render(
  <Provider store={store}>
    <Page />
  </Provider>
  , document.getElementById('app'));