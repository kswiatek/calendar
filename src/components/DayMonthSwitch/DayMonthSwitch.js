import React from 'react';
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import { toggleMode } from 'redux/actions'
import { Container, Item } from './DayMonthSwitch.styled'

const DayMonthSwitch = ({ mode }) => {
  const dispatch = useDispatch()

  const toggleHandler = () => {
    dispatch(toggleMode())
  }

  return (
    <Container onClick={toggleHandler}>
      <Item selected={mode === 'day'}>dzień</Item>
      <Item selected={mode === 'month'}>miesiąc</Item>
    </Container>
  )
}

const mapStateToProps = state => ({ mode: state.mode })

export default connect(mapStateToProps)(DayMonthSwitch)
