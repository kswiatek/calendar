import styled from 'styled-components'

import { COLORS } from 'shared/colors'
import { H1 } from 'shared/styles'

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: rgb(${COLORS.BLUE3});
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const StyledH1 = styled(H1)`
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  box-sizing: border-box;
`
