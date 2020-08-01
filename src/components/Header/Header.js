import React from 'react';

import DayMonthSwitch from 'components/DayMonthSwitch/DayMonthSwitch'
import Summary from 'components/Summary/Summary'
import Weather from 'components/Weather/Weather'
import { Container, DayMonthSwitchContainer, SummaryContainer } from './Header.styled'

const Header = () => {
  const date = {day: 27, month: 'paz', year: '2020'}

  return (
    <Container>
      <DayMonthSwitchContainer>
        <DayMonthSwitch />
      </DayMonthSwitchContainer>
      <SummaryContainer>
        <Summary date={date}/>
      </SummaryContainer>
      <Weather />
    </Container>
  )
}

export default Header
