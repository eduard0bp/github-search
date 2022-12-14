import React, { useState, useContext } from 'react'
import { FiSearch } from 'react-icons/fi'

import {
  HeaderSection,
  HeaderTitle,
  HeaderInputContainer,
  HeaderInput,
  HeaderSearchButton
} from './HeaderStyle'

import client from '../../services/client'
import { context } from '../../context'

const Header = () => {
  const ctx = useContext(context)
  const [searchedValue, setSearchedValue] = useState('')
  const handleOnChange = e => setSearchedValue(e.target.value)

  async function getUserData() {
    try {
      const response = await client.get(`/${searchedValue}`)
      const repos = await client.get(`/${searchedValue}/repos`)
      const followers = await client.get(`/${searchedValue}/followers`)
      const following = await client.get(`/${searchedValue}/following`)

      ctx.setUserData(response.data)
      ctx.setRepos(repos.data)
      ctx.setFollowers(followers.data)
      ctx.setFollowing(following.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>Projeto GitHub</HeaderTitle>
      <HeaderInputContainer>
        <HeaderInput value={searchedValue} onChange={handleOnChange} placeholder="Digite o nome de um usuário"/>

        <HeaderSearchButton onClick={getUserData}>
          <FiSearch size={15} />
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  )
}

export default Header
