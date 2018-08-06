import {File} from '../../src/ui/file'
import {mount} from 'enzyme'
import {expect} from 'chai'

describe('File', () => {
  it('props', () => {
    const props = {file: {json: {test: 1}}}
    const wrapper = mount(<File {...props} />)
    expect(wrapper.props()).to.eql(props)
  })
  it('html', () => {
    {
      const props = {file: {json: {test: 1}}}
      const wrapper = mount(<File {...props} />)
      expect(wrapper.html()).to.eql(`<div><div>AttachmentData</div><div>${JSON.stringify(props.file.json, null, '\t')}</div></div>`)
    }
    {
      const props = {file: {img: 'a/b/c/d.png'}}
      const wrapper = mount(<File {...props} />)
      expect(wrapper.html()).to.eql(`<div><div>AttachmentData</div><img src="${props.file.img}"></div>`)
    }
    {
      const props = {file: {text: 'test text'}}
      const wrapper = mount(<File {...props} />)
      expect(wrapper.html()).to.eql(`<div><div>AttachmentData</div><div>${props.file.text}</div></div>`)
    }
  })
})
