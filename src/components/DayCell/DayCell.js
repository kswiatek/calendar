import React from 'react';
import { useDispatch } from 'react-redux'

import { toggleMode, selectDay } from 'redux/actions'
import { Container, EventsContainer, EventsCount } from './DayCell.styled'

const Events = ({ eventsCount }) => (
  <EventsContainer>
    <EventsCount>
      {eventsCount}
    </EventsCount>
    {' '}wydarzeń
  </EventsContainer>
)

const DayCell = ({ date, eventsCount = 5 }) => {
  //TODO: if Date now.day === ten tutaj -> nadaj red border itp...
  const dispatch = useDispatch()
  const isEmpty = !date

  const dayCellClickHandler = () => {
    //teraz tutaj co to za dzien wybrany?


    dispatch(selectDay(date))
    dispatch(toggleMode())
  }

  const number = isEmpty ? null : date.getDate()

  return (
    <Container isEmpty={isEmpty} onClick={!isEmpty ? dayCellClickHandler : () => {} }>
      {number}
      {eventsCount > 0 && <Events eventsCount={eventsCount} />}
    </Container>
  )
}

export default DayCell
