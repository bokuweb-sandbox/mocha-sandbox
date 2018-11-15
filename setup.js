const { configure } = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

global.expect = require("expect");
require("ts-node/register/transpile-only");
require('jsdom-global')()

configure({ adapter: new Adapter() });