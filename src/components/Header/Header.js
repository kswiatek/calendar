import React from 'react';

import DayMonthSwitch from 'components/DayMonthSwitch/DayMonthSwitch'
import Summary from 'components/Summary/Summary'
import Weather from 'components/Weather/Weather'
import { Container, DayMonthSwitchContainer, SummaryContainer, MainWrapper } from './Header.styled'

const Header = () => {
  return (
    <Container>
      <MainWrapper>
        <DayMonthSwitchContainer>
          <DayMonthSwitch />
        </DayMonthSwitchContainer>
        <SummaryContainer>
          <Summary/>
        </SummaryContainer>
      </MainWrapper>
      <Weather />
    </Container>
  )
}

export default Header
