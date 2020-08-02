import React from 'react';

import { DAYS } from 'shared/consts'
import DayCell from 'components/DayCell/DayCell'
import { Container, HeaderCell } from './Month.styled'

const getEmptyDayCells = firstDayNumber => {
  // console.log('firstDayNumber', firstDayNumber)
  const count = firstDayNumber > 0 ? firstDayNumber - 1 : 6
  const emptyDays = []
  for(let i = 0; i < count; i++) {
    emptyDays.push(<DayCell key={i} />)
  }
  return emptyDays
}

const getDayCells = (year, month) => {
  // console.log('dd', new Date(year, month, 0))
  // let gg = new Date(year, month, 0)
  // debugger
  const numberOfDays = new Date(year, month , 0).getDate()
  const days = []
  for(let i = 1; i < numberOfDays; i++) {
    // emptyDays.push(<DayCell key={i} number={i + 1} />)
    // emptyDays.push(<DayCell key={i} number={i} />)
    days.push(<DayCell key={i} date={new Date(year, month, i)} />)
  }
  return days
}

const date = new Date
const month = date.getMonth()
const year = date.getFullYear()
const firstDayNumber = date.getDay() //by default sunday is 0

const headerCells = Object.values(DAYS).map(day => <HeaderCell key={day}>{day}</HeaderCell>)

const Month = () => {
  return (
    <Container>
      {headerCells}
      {getEmptyDayCells(firstDayNumber)}
      {getDayCells(year, month)}
    </Container>
  )
}

export default Month
