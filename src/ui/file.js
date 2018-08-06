import React, {Component} from 'react'

export class File extends Component {
  renderFile = () => {
    const {file} = this.props
    const fileMerge = {
      img: (imgSrc) => <img src={imgSrc} />,
      text: (textContent) => <div>{textContent}</div>,
      json: (jsonContent) => <div>{JSON.stringify(jsonContent, null, '\t')}</div>
    }
    return fileMerge[Object.keys(file)[0]](file[Object.keys(file)[0]])
  }
  render() {
    const {file} = this.props
    return (
      <div>
        <div>AttachmentData</div>
        {this.renderFile()}
      </div>
    )
  }
}