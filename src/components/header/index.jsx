import React, { useState, useContext } from 'react'
import { FiSearch } from 'react-icons/fi'

import {
  HeaderSection,
  HeaderTitle,
  HeaderInputContainer,
  HeaderInput,
  HeaderSearchButton
} from './styles'

import client from '../../services/client'
import { context } from '../../context'

const Header = () => {
  const ctx = useContext(context)
  const [searchedValue, setSearchedValue] = useState('')
  const handleOnChange = e => setSearchedValue(e.target.value)

  async function getUserData() {
    try {
      const response = await client.get(`/${searchedValue}`)
      ctx.setUserData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>Projeto GitHub</HeaderTitle>
      <HeaderInputContainer>
        <HeaderInput value={searchedValue} onChange={handleOnChange} />

        <HeaderSearchButton onClick={getUserData}>
          <FiSearch size={15} />
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  )
}

export default Header
