import { v4 as uuid } from 'uuid';

const localStorageKey = 'calendarEventsData'

const getStorage = () => localStorage.getItem(localStorageKey)

export const saveEvent = (from, to, description) => {
  const newEvent = {
    id: uuid(),
    from, 
    to, 
    description 
  }
  const loadedStorage = getStorage()

  if (loadedStorage) {
    const parsedLoadedStorage = JSON.parse(loadedStorage)
    parsedLoadedStorage.push(newEvent)
    const updatedStorage = JSON.stringify(parsedLoadedStorage)
    localStorage.setItem(localStorageKey, updatedStorage)
  } else {
    const storage = JSON.stringify([newEvent])
    localStorage.setItem(localStorageKey, storage)
  }
}

export const editEvent = (id, from, to, description) => {
  const loadedStorage = getStorage()
  const parsedStorage = JSON.parse(loadedStorage)
  const newStorage = parsedStorage.filter(event => event.id !== id)
  const newEvent = {
    id,
    from, 
    to, 
    description 
  }
  console.log('newEvent',newEvent)
  newStorage.push(newEvent)
  localStorage.setItem(localStorageKey, JSON.stringify(newStorage))
}

export const loadEventsForDay = (date) => {
  const loadedStorage = getStorage()
  if (!loadedStorage) {
    return null
  }
  const parsedStorage = JSON.parse(loadedStorage)
  const loadedEvents = parsedStorage.filter(event => {
    const eventDay = (new Date(event.from)).getDate()
    if (date.getDate() === eventDay) {
      return true
    }
  })
  return loadedEvents
}
