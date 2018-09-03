import {Hook} from '../../src/ui/hook'
import {mount} from 'enzyme'
import {expect} from 'chai'

describe('Hook', () => {
  it('props', () => {
    const props = {steps: []}
    const wrapper = mount(<Hook {...props} />)
    expect(wrapper.props()).to.eql(props)
  })
})
