import React, { Component } from 'react';
import ReactDom from 'react-dom';

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

ReactDom.render(<Page />, document.getElementById('app'));