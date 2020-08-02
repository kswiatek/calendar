const localStorageKey = 'calendarEventsData'

export const saveEvent = (from, to, description) => {
  const value = JSON.stringify({ 
    from, 
    to, 
    description 
  })
  localStorage.setItem(localStorageKey, value)
  console.log(value, 'saved!')
}
