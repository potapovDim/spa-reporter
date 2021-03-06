import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class File extends Component {

  renderContent = () => {
    const {file} = this.props
    const fileMap = {
      img: (imgSrc) => <img src={imgSrc} />,
      text: (textContent) => <div>{textContent}</div>,
      json: (jsonContent) => <div>{JSON.stringify(jsonContent, null, '\t')}</div>
    }
    const [type] = Object.keys(file)
    const content = file[Object.keys(file)[0]]
    return fileMap[type](content)
  }
  render() {
    return (
      <div>
        <div>AttachmentData </div>
        {this.renderContent()}
      </div>
    )
  }
}

File.propTypes = {
  file: PropTypes.object
}
