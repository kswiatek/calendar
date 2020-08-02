import React from 'react';
import { connect } from 'react-redux'

import { Container, Wrapper, StyledH1 } from './Summary.styled'
import { H2 } from 'shared/typography'
import { MONTHS } from 'shared/consts'

const getMonthName = monthNumber => Object.values(MONTHS)[monthNumber]

const Summary = ({ selectedDay }) => {
  const day = selectedDay.getDate()
  const month = selectedDay.getMonth()
  const year = selectedDay.getFullYear()

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

const mapStateToProps = state => ({ selectedDay: state.selectedDay })

export default connect(mapStateToProps)(Summary)
