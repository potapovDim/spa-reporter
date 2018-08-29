import {Step} from '../../src/ui/step'
import {File} from '../../src/ui/file'
import {mount} from 'enzyme'
import {expect} from 'chai'

describe('Step', () => {
  it('props', () => {
    const props = {attachments: [], title: 'test'}
    const wrapper = mount(<Step {...props} />)
    expect(wrapper.props()).to.eql(props)
    props.attachments = [{img: 'test'}]
    wrapper.setProps(props)
    expect(wrapper.props()).to.eql(props)
  })
  it('state', () => {
    const props = {attachments: [], title: 'test'}
    const wrapper = mount(<Step {...props} />)
    expect(wrapper.state()).to.eql({showAttachments: false})
    wrapper.find('div').at(1).simulate('click')
    expect(wrapper.state()).to.eql({showAttachments: true})
  })
  it('html', () => {
    const props = {attachments: [{img: 'test'}], title: 'test'}
    const wrapper = mount(<Step {...props} />)

    expect(wrapper.html()).to.eql(`<div><div><!-- react-text: 3 -->Step:<!-- /react-text --><!-- react-text: 4 -->${props.title}<!-- /react-text --></div></div>`)
    wrapper.find('div').at(1).simulate('click')
  })
})
