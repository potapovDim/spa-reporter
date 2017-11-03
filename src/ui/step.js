import React, { Component } from 'react'

export class Step extends Component {
  renderFiles = () => {
    const { files } = this.props
  }
  render() {
    const { title } = this.props
    return (
      <div>
        <div>Step : {title}</div>
      </div>
    )
  }
}