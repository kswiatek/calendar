import styled from 'styled-components'

import { COLORS } from 'shared/colors'
import { TextSmall } from 'shared/styles'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${props => !props.isEmpty && `
    background: rgba(${COLORS.BLUE3}, 0.2);
    cursor: pointer;
  `}
  ${props => props.isToday && `border: 2px solid rgb(${COLORS.RED1});`}

  &:hover {
    ${props => !props.isEmpty && `background: rgba(${COLORS.BLUE3}, 0.4);`}
  }
`

export const EventsContainer = styled.div`
  ${TextSmall}
  display: flex;
`

export const EventsCount = styled.div`
  margin-right: 5px;
  padding: 0 5px;
  border-radius: 10px;
  border: 1px solid rgb(${COLORS.BLUE3});
`
