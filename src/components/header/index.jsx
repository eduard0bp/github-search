import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import {
  HeaderSection,
  HeaderTitle,
  HeaderInputContainer,
  HeaderInput,
  HeaderSearchButton
} from './styles'

import client from '../../services/client'

const Header = () => {
  const [searchedValue, setSearchedValue] = useState('')
  const handleOnChange = e => setSearchedValue(e.target.value)

  async function getUserData() {
    try {
      const response = await client.get(`/${searchedValue}`)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>Projeto GitHub</HeaderTitle>
      <HeaderInputContainer>
        <HeaderInput value={searchedValue} onChange={handleOnChange}/>

        <HeaderSearchButton onClick={getUserData}>
          <FiSearch size={15} />
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  )
}

export default Header
