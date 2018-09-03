import {JSDOM} from 'jsdom'
import hook from 'css-modules-require-hook'
import _ from 'lodash'
import 'babel-polyfill'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
})

const dom = new JSDOM('<!doctype html><html>' +
  '<body>' +
  '<div id="top-nav"></div>' +
  '<div id="hook-target"></div>' +
  '<script ></script>' +
  '<script ></script>' +
  '<div name="main"></div>' +
  '<div class="aside__control"></div>' +
  '<div id="editor_page" class="main__page"></div>' +
  '<div id="app">' +
  '</div>' +
  '</body>' +
  '</html>', {
    url: 'http://localhost'
  })

const win = dom.window
const doc = win.document


global.Reflect = global.Reflect || reflect
global.document = doc
global.window = win
global.React = require('react')
global.navigator = win.navigator