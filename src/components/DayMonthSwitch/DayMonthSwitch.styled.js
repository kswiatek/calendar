import styled from 'styled-components'

import { COLORS } from 'shared/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(${COLORS.BLUE1});
  cursor: pointer;
`

export const Item = styled.div`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 3px solid ${props => props.selected ? `rgb(${COLORS.BLUE3})` : 'transparent'};
  text-transform: uppercase;
`
