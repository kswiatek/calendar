import styled, { css } from 'styled-components'

import { COLORS } from './colors'

export const H1 = styled.h1`
  margin: 5px;
  font-size: 25px;
`

export const H2 = styled.h2`
  margin: 3px;
  font-size: 14px;
`

export const TextSmall = css`
  font-size: 12px;
`

export const Button = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 4px;
  border: 1px solid rgb(${COLORS.BLUE4});
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    border: 1px solid rgb(${COLORS.DARK2});
  }
`

