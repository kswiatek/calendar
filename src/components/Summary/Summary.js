import React from 'react';

import { Container, Wrapper, StyledH1 } from './Summary.styled'
import { H2 } from 'shared/typography'
import { MONTHS } from 'shared/consts'

const date = new Date
const day = date.getDay()
const month = date.getMonth()
const year = date.getYear()

const getMonthName = monthNumber => {
  return MONTHS[monthNumber]
}

const Summary = () => {
  return (
    <Container>
      {day && <StyledH1>{day}</StyledH1>}
      <Wrapper>
        <H2>{getMonthName(month)}</H2>
        <H2>{year}</H2>
      </Wrapper>
    </Container>
  )
}

export default Summary
