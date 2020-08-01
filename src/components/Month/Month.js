import React from 'react';

import { DAYS } from 'shared/consts'
import DayCell from 'components/DayCell/DayCell'
import { Container, HeaderCell } from './Month.styled'

const getEmptyDayCells = count => {
  const emptyDays = []
  for(let i = 0; i < count; i++) {
    emptyDays.push(<DayCell key={i} />)
  }
  return emptyDays
}

const getDayCells = (year, month) => {
  const numberOfDays = new Date(year, month, 0).getDate()
  const emptyDays = []
  for(let i = 0; i < numberOfDays; i++) {
    emptyDays.push(<DayCell key={i} number={i + 1} />)
  }
  return emptyDays
}

const date = new Date
const month = date.getMonth()
const year = date.getYear()
const firstDayNumber = date.getDay()

const Month = () => {
  return (
    <Container>
      <HeaderCell>{DAYS.MON}</HeaderCell>
      <HeaderCell>{DAYS.TUE}</HeaderCell>
      <HeaderCell>{DAYS.WEN}</HeaderCell>
      <HeaderCell>{DAYS.THU}</HeaderCell>
      <HeaderCell>{DAYS.FRI}</HeaderCell>
      <HeaderCell>{DAYS.SAT}</HeaderCell>
      <HeaderCell>{DAYS.SUN}</HeaderCell>
      {getEmptyDayCells(firstDayNumber - 1)}
      {getDayCells(year, month)}
    </Container>
  )
}

export default Month
