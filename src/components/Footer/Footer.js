import React from 'react';
import { useDispatch, connect } from 'react-redux'

import { selectMonth, selectDay } from 'redux/actions'
import { Container } from './Footer.styled'
import { Button } from 'shared/styles'

const Footer = ({ mode, selectedDay, selectedMonth }) => {
  const dispatch = useDispatch()

  const getUpdatedMonth = value => new Date(
    selectedMonth.getFullYear(), 
    selectedMonth.getMonth() + value)

  const getUpdatedDay = value => new Date(
    selectedDay.getFullYear(), 
    selectedDay.getMonth(), 
    selectedDay.getDate() + value)

  const setPreviousMonthHandler = () => {
    const previousMonth = getUpdatedMonth(-1)
    dispatch(selectMonth(previousMonth))
  }

  const setNextMonthHandler = () => {
    const nextMonth = getUpdatedMonth(1)
    dispatch(selectMonth(nextMonth))
  }

  const setPreviousDayHandler = () => {
    const previousDay = getUpdatedDay(-1)
    dispatch(selectDay(previousDay))
  }

  const setNextDayHandler = () => {
    const nextDay = getUpdatedDay(1)
    dispatch(selectDay(nextDay))
  }

  const previousClickHandler = mode === 'day' ? setPreviousDayHandler : setPreviousMonthHandler
  const nextClickHandler = mode === 'day' ? setNextDayHandler : setNextMonthHandler

  return (
    <Container>
      <Button onClick={previousClickHandler}>{'<'}</Button>
      <Button onClick={nextClickHandler}>{'>'}</Button>
    </Container>
  )
}

const mapStateToProps = state => ({
  mode: state.mode,
  selectedDay: state.selectedDay,
  selectedMonth: state.selectedMonth,
})

export default connect(mapStateToProps)(Footer)
