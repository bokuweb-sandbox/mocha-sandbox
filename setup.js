const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

global.expect = require("expect");
require("ts-node/register/transpile-only");
require('jsdom-global')()

configure({ adapter: new Adapter() });


/*
const requireHacker = require("require-hacker")

require("jsdom-global")()
global.expect = require("expect")

const {configure} = require("enzyme")
const Adapter = require("enzyme-adapter-react-16")
configure({adapter: new Adapter()})

require("ts-node/register/transpile-only")

requireHacker.hook("png", path => `module.exports = null`)

document.body.style.height = "100%"
document.body.style.padding = 0
document.body.style.margin = 0
document.body.style.minHeight = "100%"
document.body.style.backgroundColor = "#fff"

const div = document.createElement("div")
div.style.height = "100%"
document.body.appendChild(div)

const MockDate = require("mockdate")
MockDate.set("2018-10-16T09:39:47.471Z", 0)

requireHacker.global_hook("transform", path => {
  if (/-!svg-react-loader!/.test(path)) {
    return {source: `module.exports = () => null`}
  }
  if (/\.scss$/.test(path)) {
    return {source: `module.exports = () => null`}
  }
})
require("@babel/register")({
  ignore: [
    function(filepath) {
      return !/lodash-es/.test(filepath)
    }
  ],
  presets: [],
  plugins: ["@babel/plugin-transform-modules-commonjs"]
})
*/
