import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  @media(max-width: 700px) {
    flex-direction: column;
  }
`

export const DayMonthSwitchContainer = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  height: 100%;
  width: 160px;

  @media(max-width: 700px) {
    width: 100%;
  }
`

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  height: 100%;
  width: 160px;
`

export const MainWrapper = styled.div`
  display: flex;
  height: 70px;
`
