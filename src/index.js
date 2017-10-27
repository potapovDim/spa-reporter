import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Page extends Component {
  componentDidMount() {

  };
  render() {
    return (
      <div className="work__area">
        <div className="scenario__area">Test </div>
      </div>
    );
  };
};

ReactDom.render(<Page />, document.getElementById('app'));