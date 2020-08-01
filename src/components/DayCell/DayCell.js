import React from 'react';

import { Container, EventsContainer, EventsCount } from './DayCell.styled'

const Events = ({ eventsCount }) => (
  <EventsContainer>
    <EventsCount>
      {eventsCount}
    </EventsCount>
    {' '}wydarzeń
  </EventsContainer>
)

const DayCell = ({ number, eventsCount = 5 }) => {
  return (
    <Container isEmpty={!number}>
      {number}
      {eventsCount > 0 && <Events eventsCount={eventsCount} />}
    </Container>
  )
}

export default DayCell
