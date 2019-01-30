import * as React from 'react'
import * as ReactDOM from 'react-dom'

import styled from 'styled-components'

const DefaultNavbar = styled.nav`
    text-align: center;
`

const ExtendedNavbar = styled(DefaultNavbar)`
    position: fixed;
`

export let MyApp = () =>
    <div>
    <DefaultNavbar>default</DefaultNavbar>
    <ExtendedNavbar>extended</ExtendedNavbar>
    </div>


ReactDOM.render(<MyApp/>, document.getElementById('root'))