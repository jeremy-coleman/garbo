import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
const DefaultNavbar = styled.nav `
    text-align: center;
`;
const ExtendedNavbar = styled(DefaultNavbar) `
    position: fixed;
`;
export let MyApp = () => React.createElement("div", null,
    React.createElement(DefaultNavbar, null, "default"),
    React.createElement(ExtendedNavbar, null, "extended"));
ReactDOM.render(React.createElement(MyApp, null), document.getElementById('root'));
