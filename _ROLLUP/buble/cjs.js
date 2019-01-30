'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var ReactDOM = require('react-dom');
var styled = _interopDefault(require('styled-components'));

var DefaultNavbar = styled.nav `
    text-align: center;
`;
var ExtendedNavbar = styled(DefaultNavbar) `
    position: fixed;
`;
var MyApp = function () { return React.createElement("div", null,
    React.createElement(DefaultNavbar, null, "default"),
    React.createElement(ExtendedNavbar, null, "extended")); };
ReactDOM.render(React.createElement(MyApp, null), document.getElementById('root'));

exports.MyApp = MyApp;
