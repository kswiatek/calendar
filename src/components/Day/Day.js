import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import EditCreateModal from 'components/EditCreateModal/EditCreateModal'
import { /*saveEvent,*/ loadEventsForDay } from 'shared/eventsManager'
import { H1, Button } from 'shared/styles'
import { Container, Header } from './Day.styled'

const Day = ({ selectedDay }) => {
  const [events, setEvents] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setEvents(loadEventsForDay(selectedDay))
  }, [selectedDay])


  // const saveEventHandler = (from, to, description) => {
  //   saveEvent(from, to, description)
  // }

  return (
    <Container>
      <Header>
        <H1>Wydarzenia:</H1>
        <Button onClick={() => setIsModalOpen(true)}>dodaj +</Button>
        {/* TODO: open modal on clikc for adding new events */}
      </Header>
      {events && events.map(event => <p>{event.description}</p>)}
      {isModalOpen && <EditCreateModal selectedDay={selectedDay} 
        /*saveEvent={saveEventHandler}*/ closeModal={() => setIsModalOpen(false)} />}
    </Container>
  )
}

const mapStateToProps = state => ({ selectedDay: state.selectedDay })

export default connect(mapStateToProps)(Day)
