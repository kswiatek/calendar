import styled from 'styled-components'

import { COLORS } from 'shared/colors'

export const Blur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(${COLORS.DARK2}, 0.6);
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  width: 70%;
  min-width: 320px;
  max-width: 600px;
  background: rgb(${COLORS.BLUE4});
  margin: 0 auto;
  border-radius: 5px;
  text-transform: uppercase;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid rgb(${COLORS.DARK2});
  margin: 15px auto 0 auto;
  padding: 10px;
`

export const HoursContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input.attrs({
  required: true
})`
  width: 100%;
  margin-left: 10px;
`

export const TimeInput = styled(Input).attrs({
  type: 'time',
  min: '00:00',
  max: '23:59',
})`
  width: 65px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 10px 0;

  & > button {
    margin-right: 15px;
  }
`


