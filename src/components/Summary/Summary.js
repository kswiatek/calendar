import React from 'react';
import { connect } from 'react-redux'

import { Container, Wrapper, StyledH1 } from './Summary.styled'
import { H2 } from 'shared/styles'
import { MONTHS } from 'shared/consts'

const getMonthName = monthNumber => Object.values(MONTHS)[monthNumber]

const Summary = ({ mode, selectedDay, selectedMonth }) => {
  const day = mode === 'day' ? selectedDay.getDate() : null
  const month = mode === 'day' ? selectedDay.getMonth() : selectedMonth.getMonth()
  const year = mode === 'day' ? selectedDay.getFullYear() : selectedMonth.getFullYear()

  return (
    <Container>
      <StyledH1>{day}</StyledH1>
      <Wrapper>
        <H2>{getMonthName(month)}</H2>
        <H2>{year}</H2>
      </Wrapper>
    </Container>
  )
}

const mapStateToProps = state => ({ 
  selectedDay: state.selectedDay,
  selectedMonth: state.selectedMonth,
  mode: state.mode,
 })

export default connect(mapStateToProps)(Summary)
