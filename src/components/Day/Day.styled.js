import styled from 'styled-components'

import { COLORS } from 'shared/colors'
import { Button, TextSmall } from 'shared/styles'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  line-height: 30px;

  &:hover {
    background: rgba(${COLORS.DARK2}, 0.1);
  }
`

export const SmallButton = styled(Button)`
  ${TextSmall}
  flex-shrink: 0;
  height: 20px;
  width: 60px;
  margin-left: 30px;
`
