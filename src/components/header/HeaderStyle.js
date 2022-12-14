import styled from 'styled-components'

export const HeaderSection = styled.header`
  width: 800px;
  height: 130px;
  background: #16d3ac;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0;
`

export const HeaderTitle = styled.h1`
  margin: 0;
  padding: 15px 0;
  color: #e5e5e5;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  width: 100%;
`

export const HeaderInputContainer = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderInput = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 15px;
  border: none;
  padding: 0 16px;
  color: #444;
  transition: 0.4s ease;

  &:focus {
    outline: none;
    transition: 0.4s ease;
  }
`

export const HeaderSearchButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background: #ff0991;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: ease 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: ease 0.3s;
    cursor: pointer;
  }
`
