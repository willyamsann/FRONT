import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Dashboard" icon={'home'} active/>
            <MenuLink title="Entradas" icon={'file-multiple'} />
            <MenuLink title="Saidas" icon={'gift'}/>
            <MenuLink title="Settings" icon={'cog'} />
        </Container>
    )
}

export default Menu