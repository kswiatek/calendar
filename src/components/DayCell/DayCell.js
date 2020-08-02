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
  const dispatch = useDispatch()
  const isEmpty = !date
  
  if (!isEmpty) {
    const loadedEvents = loadEventsForDay(date)
    eventsCount = !loadedEvents ? 0 : loadedEvents.length
  }

  const dayCellClickHandler = () => {
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
