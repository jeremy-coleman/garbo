"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ReactDOM = require("react-dom");
var styled_components_1 = require("styled-components");
var DefaultNavbar = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    text-align: center;\n"], ["\n    text-align: center;\n"])));
var ExtendedNavbar = styled_components_1.default(DefaultNavbar)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    position: fixed;\n"], ["\n    position: fixed;\n"])));
exports.MyApp = function () {
    return React.createElement("div", null,
        React.createElement(DefaultNavbar, null, "default"),
        React.createElement(ExtendedNavbar, null, "extended"));
};
ReactDOM.render(React.createElement(exports.MyApp, null), document.getElementById('root'));
var templateObject_1, templateObject_2;
