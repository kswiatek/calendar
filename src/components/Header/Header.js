import React from 'react';

import DayMonthSwitch from 'components/DayMonthSwitch/DayMonthSwitch'
import { Container } from './Header.styled'

const Header = () => {
  return (
    <Container><DayMonthSwitch/></Container>
  )
}

export default Header