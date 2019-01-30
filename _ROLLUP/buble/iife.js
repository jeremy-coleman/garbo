var MYBUNDLE = (function (exports, React, ReactDOM, styled) {
    'use strict';

    styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

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

    return exports;

}({}, React, ReactDOM, styled));
