import React from 'react';

import { Container, Item } from './DayMonthSwitch.styled'

const DayMonthSwitch = ({ toggleDayMonth }) => {
  return (
    <Container>
      <Item selected>dzień</Item>
      <Item>miesiąc</Item>
    </Container>
  )
}

export default DayMonthSwitch
