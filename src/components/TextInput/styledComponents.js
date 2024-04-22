import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  padding-right: 10px;
`

export const Input = styled.input`
  width: 250px;
  height: 30px;
  outline: none;
  margin-right: 20px;
  padding: 10px;
`

export const Button = styled.button`
  height: 30px;
  width: 55px;
  cursor: pointer;
  outline: none;
  background-color: #d946ef;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 13px;
  border-width: 0;
`
