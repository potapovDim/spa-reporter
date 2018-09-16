import React, {Component} from 'react'
import {Step} from './step'
import './style/test.scss'

export class Test extends Component {
  state = {open: false, opts: false}

  renderSteps = () => {
    const {steps = []} = this.props
    return steps.map((step, index) => <Step key={index} {...step} />)
  }

  openDetails = () => this.setState({open: !this.state.open})
  showOpts = () => this.setState({opts: !this.state.opts})

  render() {
    const {open, opts} = this.state
    const {title, /*start, end,*/ duration, state, testOptions, errorStack} = this.props

    const getClass = () => {
      switch(state) {
        case 'failed': return 'failed'
        case 'passed': return 'passed'
        case 'pending': return 'pending'
        case 'broken': return 'broken'
      }
      return ''
    }
    return (
      <div>

        <div onClick={this.openDetails} className={`test__title ${getClass()}`}> Test: {title}</div>
        {open &&
          <div className="flex__test">
            <div>
              {
                !!testOptions &&
                <div onMouseEnter={this.showOpts} onMouseLeave={this.showOpts} className="">
                  Show options
              </div>
              }
              {opts && <div>{JSON.stringify(testOptions, null, '\t')}</div>}
            </div>
            <div className="test__header_item">State: {state}</div>
            {/*<div className="test__header_item">Start: {start} </div>*/}
            <div className="test__header_item">Duration: {duration}</div>
            {/*<div className="test__header_item">End: {end} </div> */}
            <div>{this.renderSteps()}</div>
            {errorStack && <div className="test_error__stack">{errorStack}</div>}
          </div>
        }
      </div >
    )
  }
}
