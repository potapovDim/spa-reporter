import React, {Component} from 'react'
import {File} from './file'
import './style/step.scss'

export class Step extends Component {
  state = {open: false}

  openContent = () => this.setState({open: !this.state.open})

  renderContent = () => {
    const {attachments = []} = this.props
    return attachments.map((file, index) => <File key={index} file={file} />)
  }
  render() {
    const {open} = this.state
    const {title, attachments = []} = this.props
    return (
      <div>
        <div className={attachments.length ? 'step__with_attachments' : 'step__without_attachments'} onClick={this.openContent}>Step:{title}</div>
        {open && attachments.length && this.renderContent()}
      </div>
    )
  }
}