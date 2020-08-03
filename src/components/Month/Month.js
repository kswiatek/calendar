import React from 'react';
import { connect } from 'react-redux'

import { useMobile } from 'hooks/useMobile'
import { DAYS, SHROT_DAYS } from 'shared/consts'
import DayCell from 'components/DayCell/DayCell'
import { Container, HeaderCell } from './Month.styled'

const getEmptyDayCells = date => {
  const month = date.getMonth()
  const year = date.getFullYear()
  const firstDayNumber = (new Date(year, month, 1)).getDay()
  const emptyDays = []
  for(let i = 1; i < firstDayNumber; i++) {
    emptyDays.push(<DayCell key={i} />)
  }
  return emptyDays
}

const getDayCells = date => {
  const month = date.getMonth()
  const year = date.getFullYear()
  const numberOfDays = new Date(year, month + 1 , 0).getDate() //0 indicated last day of month
  const days = []
  for(let i = 1; i <= numberOfDays; i++) {
    days.push(<DayCell key={i} date={new Date(year, month, i)} />)
  }
  return days
}

const getHeaderCells = days => Object.values(days).map(day => <HeaderCell key={day}>{day}</HeaderCell>)

const Month = ({ selectedMonth }) => {
  const { isMobile } = useMobile()
  const headerCells = isMobile ? getHeaderCells(SHROT_DAYS) : getHeaderCells(DAYS)

  return (
    <Container>
      {headerCells}
      {getEmptyDayCells(selectedMonth)}
      {getDayCells(selectedMonth)}
    </Container>
  )
}

const mapStateToProps = state => ({ selectedMonth: state.selectedMonth })

export default connect(mapStateToProps)(Month)
