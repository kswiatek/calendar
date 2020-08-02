import styled from 'styled-components'

import { COLORS } from 'shared/colors'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewButton = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 4px;
  border: 1px solid rgb(${COLORS.BLUE4});
  cursor: pointer;
  text-transform: capitalize;
`
