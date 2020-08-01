import React from 'react';

import { Container, Wrapper, StyledH1 } from './Summary.styled'
import { H2 } from 'shared/typography'

const Summary = ({ date }) => {
  const { day, month, year } = date

  return (
    <Container>
      {day && <StyledH1>{day}</StyledH1>}
      <Wrapper>
        <H2>{month}</H2>
        <H2>{year}</H2>
      </Wrapper>
    </Container>
  )
}

export default Summary
