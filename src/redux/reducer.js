import { actionTypes } from 'redux/actionTypes'

const initialState = {
  mode: 'day',
  selectedDay: new Date
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
    default:
      return state
  }
}

export default reducer
