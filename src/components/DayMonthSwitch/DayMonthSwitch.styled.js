import styled from 'styled-components'

import { COLORS } from 'shared/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(${COLORS.BLUE1}, 1);
`

export const Item = styled.div`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 3px solid ${props => props.selected ? `rgba(${COLORS.BLUE2}, 1)` : 'transparent'};
  ${props => !props.selected && `cursor: pointer;`}
  text-transform: uppercase;
`
