import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/will.jpeg'

const Container = styled.div`
    margin-top: 5rem;
`

const ProfileImg = styled.img`
    height: 5rem;
    border-radius:50%;
    align-items: center;
    top:10px;
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
    align-items: center;
`

const Profile = () => {
    return(
        <Container>
            <ProfileImg src={Image} />
            <ProfileName>Willyam Santos</ProfileName>
        </Container>
    )
}

export default Profile