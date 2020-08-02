import { v4 as uuid } from 'uuid';

const localStorageKey = 'calendarEventsData'

export const saveEvent = (from, to, description) => {
  const newEvent = {
    id: uuid(),
    from, 
    to, 
    description 
  }
  const loadedStorage = localStorage.getItem(localStorageKey)

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

export const loadEventsForDay = (date) => {
  const loadedStorage = localStorage.getItem(localStorageKey)
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
