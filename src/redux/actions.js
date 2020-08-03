import { actionTypes } from 'redux/actionTypes'

export const toggleMode = () => ({ type: actionTypes.TOGGLE_MODE })

export const clearSelection = () => ({ type: actionTypes.CLEAR_SELECTION })

export const selectDay = date => ({ type: actionTypes.SELECT_DAY, date })

export const selectMonth = date => ({ type: actionTypes.SELECT_MONTH, date })
