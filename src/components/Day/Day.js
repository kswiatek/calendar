import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import EditCreateModal from 'components/EditCreateModal/EditCreateModal'
import { loadEventsForDay } from 'shared/eventsManager'
import { H1, Button } from 'shared/styles'
import { Container, Header, Li, SmallButton } from './Day.styled'

let eventDataToEdit = {}

const Day = React.memo(({ selectedDay }) => {
  const [events, setEvents] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) {
      return
    }
    const loadedEvents = loadEventsForDay(selectedDay)
    if (!loadedEvents) {
      return
    }

    setEvents(loadedEvents.sort((a, b) => a.from - b.from))
  }, [selectedDay, isModalOpen])

  const openModalInCreateMode = () => {
    eventDataToEdit = {}
    setIsModalOpen(true)
  }

  const openModalInEditMode = (event) => {
    eventDataToEdit = { ...event }
    setIsModalOpen(true)
  }

  const getEvents = () => {
    if (!events) {
      return null
    }
    return (
      <ul>
        {events.map((event, i) => {
          const fromMinutes = (new Date(event.from)).getMinutes()
          const toMinutes = (new Date(event.to)).getMinutes()
          const fromHours = (new Date(event.from)).getHours()
          const toHours = (new Date(event.to)).getHours()
          const from = `${fromHours < 10 ? '0' : ''}${fromHours}:${fromMinutes < 10 ? '0' : ''}${fromMinutes}`
          const to = `${toHours < 10 ? '0' : ''}${toHours}:${toMinutes < 10 ? '0' : ''}${toMinutes}`

          return (<Li key={i}>{from} - {to} - {event.description}
            <SmallButton onClick={() => openModalInEditMode(event)}>edytuj</SmallButton>
          </Li>)
        })}
      </ul>
    )
  }

  return (
    <Container>
      <Header>
        <H1>Wydarzenia:</H1>
        <Button onClick={openModalInCreateMode}>dodaj +</Button>
      </Header>
      {getEvents()}
      {isModalOpen && <EditCreateModal 
        selectedDay={selectedDay} 
        closeModal={() => setIsModalOpen(false)} 
        eventDataToEdit={eventDataToEdit} />}
    </Container>
  )
})

const mapStateToProps = state => ({ selectedDay: state.selectedDay })

export default connect(mapStateToProps)(Day)
