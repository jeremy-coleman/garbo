import { createElement } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

var DefaultNavbar = styled.nav `
    text-align: center;
`;
var ExtendedNavbar = styled(DefaultNavbar) `
    position: fixed;
`;
var MyApp = function () { return createElement("div", null,
    createElement(DefaultNavbar, null, "default"),
    createElement(ExtendedNavbar, null, "extended")); };
render(createElement(MyApp, null), document.getElementById('root'));

export { MyApp };
