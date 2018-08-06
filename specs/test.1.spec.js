import {File} from '../src/ui/file'
import {mount} from 'enzyme'
import {expect} from 'chai'


describe('File', () => {
  it('props', () => {
    const props = {file: {json: {test: 1}}}
    const wrapper = mount(<File {...props} />)
    expect(wrapper.props()).to.eql(props)
  })
})