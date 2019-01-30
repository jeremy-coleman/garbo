import*as e from"react";import*as t from"react-dom";import n from"styled-components";const l=n.nav`
    text-align: center;
`,r=n(l)`
    position: fixed;
`;export let MyApp=()=>e.createElement("div",null,e.createElement(l,null,"default"),e.createElement(r,null,"extended"));t.render(e.createElement(MyApp,null),document.getElementById("root"));