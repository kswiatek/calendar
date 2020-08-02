import React from 'react';
import { useDispatch } from 'react-redux'

import { loadEventsForDay } from 'shared/eventsManager'
import { toggleMode, selectDay } from 'redux/actions'
import { Container, EventsContainer, EventsCount } from './DayCell.styled'

let eventsCount = 0

const Events = ({ eventsCount }) => (
  <EventsContainer>
    <EventsCount>
      {eventsCount}
    </EventsCount>
    {' '}wydarzeń
  </EventsContainer>
)

const DayCell = ({ date }) => {
  //TODO: if Date now.day === ten tutaj -> nadaj red border itp...
  const dispatch = useDispatch()
  const isEmpty = !date
  
  if (!isEmpty) {
    eventsCount = loadEventsForDay(date).length
  }

  const dayCellClickHandler = () => {
    //teraz tutaj co to za dzien wybrany?
    dispatch(selectDay(date))
    dispatch(toggleMode())
  }

  const number = isEmpty ? null : date.getDate()
  const isToday = date && date.getDate() === (new Date).getDate()

  return (
    <Container isEmpty={isEmpty} isToday={isToday} onClick={!isEmpty ? dayCellClickHandler : () => {} }>
      {number}
      {eventsCount > 0 && <Events eventsCount={eventsCount} />}
    </Container>
  )
}

export default DayCell
