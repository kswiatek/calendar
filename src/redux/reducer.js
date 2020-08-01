import { actionTypes } from 'redux/actionTypes'

const initialState = {
  mode: 'month'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODE:
      return { mode: state.mode === 'day' ? 'month' : 'day' }
    default:
      return state
  }
}

export default reducer
