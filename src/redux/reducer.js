import { actionTypes } from 'redux/actionTypes'

const currentDate = new Date

const initialState = {
  mode: 'month',
  selectedDay: currentDate,
  selectedMonth: new Date(currentDate.getFullYear(), currentDate.getMonth()),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODE:
      const mode = state.mode === 'day' ? 'month' : 'day'
      return { ...state, mode }
    case actionTypes.SELECT_DAY:
      return { ...state, selectedDay: action.date }
    case actionTypes.CLEAR_DAY:
      return { ...state, selectedDay: new Date }
    case actionTypes.SELECT_MONTH:
      return { ...state, selectedMonth: action.date }
    default:
      return state
  }
}

export default reducer
