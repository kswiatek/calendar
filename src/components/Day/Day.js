import React from 'react'

import { saveEvent } from 'shared/eventsManager'
import { H1 } from 'shared/typography'
import { Container, Header, NewButton } from './Day.styled'

const Day = () => {
  return (
    <Container>
      <Header>
        <H1>Wydarzenia:</H1>
        <NewButton onClick={saveEvent}>dodaj +</NewButton>
        {/* TODO: open modal on clikc for adding new events */}
      </Header>

    </Container>
  )
}

export default Day
