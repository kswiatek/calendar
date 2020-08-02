import React, { useRef, useEffect } from 'react';

import { saveEvent, editEvent } from 'shared/eventsManager'
import { H2, Button } from 'shared/styles'
import { 
  Container, 
  Blur, 
  Form, 
  HoursContainer, 
  TimeInput, 
  Input, 
  InputContainer, 
  ButtonsContainer 
} from './EditCreateModal.styled'

const getInitialValueFromDate = (date) => {
  const formattedDate = new Date(date)
  return `${formattedDate.getHours()}:${formattedDate.getMinutes()}`
}

const EditCreateModal = ({ selectedDay, closeModal, eventDataToEdit }) => {
  console.log('modal render, eventDataToEdit:', eventDataToEdit)
  const inputFrom = useRef(null)
  const inputTo = useRef(null)
  const inputDescription = useRef(null)

  const { id, from, to, description } = eventDataToEdit

  useEffect(() => {
    if (from) {
      inputFrom.current.value = getInitialValueFromDate(from)
    }
    if (to) {
      inputTo.current.value = getInitialValueFromDate(to)
    }
    if (description) {
      inputDescription.current.value = description
    }
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()

    const [fromHours, fromMinutes] = inputFrom.current.value.split(':')
    const [toHours, toMinutes] = inputTo.current.value.split(':')
    const from = (new Date(selectedDay)).setHours(fromHours, fromMinutes)
    const to = (new Date(selectedDay)).setHours(toHours, toMinutes)
    const description = inputDescription.current.value

    if (id) {
      editEvent(id, from, to, description)
    } else {
      saveEvent(from, to, description)
    }
    closeModal()
  }

  return (
    <Blur>
      <Container>
        <H2>{id ? 'edytuj wydarzenie' : 'nowe wydarzenie'}</H2>
        <Form onSubmit={submitHandler}>
          <HoursContainer>
            <InputContainer>
              <label htmlFor='from' >od:{' '}</label>
              <TimeInput name='from' ref={inputFrom} />
            </InputContainer>
            <InputContainer>
              <label htmlFor='to' >do:{' '}</label>
              <TimeInput name='to' ref={inputTo}/>
            </InputContainer>
          </HoursContainer>
          <InputContainer>
            <label htmlFor='name'>nazwa:</label>
            <Input name='name' ref={inputDescription}/>
          </InputContainer>
          <ButtonsContainer>
            <Button onClick={closeModal}>wróć</Button>
            <Button type='submit'>{id ? 'zapisz' : 'dodaj'}</Button>
        </ButtonsContainer>
        </Form>
      </Container>
    </Blur>
  )
}

export default EditCreateModal
