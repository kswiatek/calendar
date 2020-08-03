import React from 'react';

import { DAYS } from 'shared/consts'
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
  const days2 = []
  for(let i = 1; i <= numberOfDays; i++) {
    days2.push(new Date(year, month, i))
    days.push(<DayCell key={i} date={new Date(year, month, i)} />)
  }
  return days
}

const headerCells = Object.values(DAYS).map(day => <HeaderCell key={day}>{day}</HeaderCell>)
const date = new Date

const Month = () => {
  return (
    <Container>
      {headerCells}
      {getEmptyDayCells(date)}
      {getDayCells(date)}
    </Container>
  )
}

export default Month
