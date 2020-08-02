import React from 'react';

import { saveEvent } from 'shared/eventsManager'
import { H2, Button } from 'shared/styles'
import { Container, Blur, Form, HoursContainer, TimeInput, Input, InputContainer, ButtonsContainer } from './EditCreateModal.styled'

const EditCreateModal = ({ selectedDay, closeModal }) => {
    // const from = (new Date(selectedDay)).setHours(10, 45)
  // const to = (new Date(selectedDay)).setHours(12, 22)
  return (
    // <Container onClick={() => saveEvent(from, to, 'haba babab')}>EditCreateModal</Container>
    <Blur>
      <Container onClick={closeModal}>
        <H2>Nowe wydarzenie</H2>
        <Form>
          <HoursContainer>
            <InputContainer>
              <label htmlFor='from' >od:{' '}</label>
              <TimeInput name='from'/>
            </InputContainer>
            <InputContainer>
              <label htmlFor='to' >do:{' '}</label>
              <TimeInput name='to'/>
            </InputContainer>
          </HoursContainer>
          <InputContainer>
            <label htmlFor='name'>nazwa:</label>
            <Input name='name'/>
          </InputContainer>
        </Form>
        <ButtonsContainer>
          <Button>wróć</Button>
          <Button>dodaj</Button>
        </ButtonsContainer>
      </Container>
    </Blur>
  )
}

export default EditCreateModal
