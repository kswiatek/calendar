import styled from 'styled-components'

import { COLORS } from 'shared/colors'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 60px);
  gap: 5px;
`

export const HeaderCell = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid rgb(${COLORS.DARK2});
`
