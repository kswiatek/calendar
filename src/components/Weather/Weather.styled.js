import styled from 'styled-components'

import { COLORS } from 'shared/colors'
import { TextSmall } from 'shared/styles'

export const Container = styled.div`
  height: 70px;
  max-height: 70px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  background: rgb(${COLORS.BLUE1});
`

export const IconContainer = styled.div`
  margin: 5px 20px;

  svg {
    height: 100%;
    width: 70px;
  }
`

export const Description = styled.div`
  ${TextSmall}
  margin: 3px;
`
