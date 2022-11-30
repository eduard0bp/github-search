import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, NumberContainer } from './styles'

const UserNumbers = props => {
  const history = useHistory()
  const handleOnClick = route => history.push(route)
  return (
    <Container>
      <NumberContainer onClick={() => handleOnClick('/repos')}>
        <h1>18</h1>
        <h2>Repositórios</h2>
      </NumberContainer>
      <NumberContainer onClick={() => handleOnClick('/followers')}>
        <h1>18</h1>
        <h2>Seguidores</h2>
      </NumberContainer>
      <NumberContainer onClick={() => handleOnClick('/follow')}>
        <h1>18</h1>
        <h2>Seguindo</h2>
      </NumberContainer>
    </Container>
  )
}

export default UserNumbers