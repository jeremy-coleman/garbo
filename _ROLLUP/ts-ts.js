import{createElement as t}from"react";import{render as e}from"react-dom";import o from"styled-components";const n=o.nav`
    text-align: center;
`,l=o(n)`
    position: fixed;
`;let r=()=>t("div",null,t(n,null,"default"),t(l,null,"extended"));e(t(r,null),document.getElementById("root"));export{r as MyApp};
