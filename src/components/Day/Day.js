import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { saveEvent, loadEventsForDay } from 'shared/eventsManager'
import { H1 } from 'shared/typography'
import { Container, Header, NewButton } from './Day.styled'

const Day = ({ selectedDay }) => {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    setEvents(loadEventsForDay(selectedDay))
  }, [selectedDay])

  const from = (new Date(selectedDay)).setHours(10, 45)
  const to = (new Date(selectedDay)).setHours(12, 22)

  return (
    <Container>
      <Header>
        <H1>Wydarzenia:</H1>
        <NewButton onClick={() => saveEvent(from, to, 'haba babab')}>dodaj +</NewButton>
        {/* TODO: open modal on clikc for adding new events */}
      </Header>
      {events && events.map(event => <p>{event.description}</p>)}
    </Container>
  )
}

const mapStateToProps = state => ({ selectedDay: state.selectedDay })

export default connect(mapStateToProps)(Day)
