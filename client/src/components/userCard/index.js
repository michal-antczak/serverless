import React from 'react'
import styled from 'styled-components'
import {colors, Heading1, Text} from '../../styles'
import Image from '../../img/card-3.jpg'

export default function UserCardComponent({user}) {

  const {id, firstname, lastname, price, photos, title, status} = user

  return (
    <UserCard>
    
        <ImageContainer>
          <img src={Image} alt="person" />
        </ImageContainer>

        <Data>
          <h1>{`${firstname} ${lastname}`}</h1>
          <p>{title}</p>
        </Data>

        <Status>
          <h3>${price}</h3>
          <p>{status}</p>
        </Status>

    </UserCard>
  )
}

const UserCard = styled.div`
  margin: 1.4rem;
  padding: 1.4rem;
  display: flex;
  align-items: center;
  border: 1px solid #aaa;
  background-color: #ddd;
  border-radius: 5px;
  max-width: 45rem;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};

    h1, h3{
      color: white;
    }
  }
`

const ImageContainer = styled.div`
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 5px;

  img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    object-position: center;
  }
`
const Data = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 .9rem;
  border-left: 1px solid #aaa;

  h1{
    font-size: 2.2rem;
    font-weight: 600;
    color: #222;
    transition: all .3s;
  }
  
  p{
    font-size: 1.6rem;
    color: #aaa;
  }
`

const Status = styled.div`
  h3{
    font-size: 2.2rem;
    font-weight: 600;
    color: #444;
    text-align: center;
    transition: all .3s;
  }
  p{
    font-size: 1.6rem;
    color: ${colors.secondary};
    font-weight: 600;
    text-align: center;
  }
`