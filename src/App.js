import React, { useState } from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Month from 'components/Month/Month'
import Day from 'components/Day/Day'
import { Container } from './App.styled'

const App = ({mode}) => {
  // const [mode, setMode] = useState('month')

// console.log('app props', props)
  return (<>
    <Container>
      <Header />
      {mode === 'day' && <Day />}
      {mode === 'month' && <Month />}
      
    </Container>
    <Footer /></>
  )
}

const mapStateToProps = state => ({mode: state.mode})

export default connect(mapStateToProps)(App)
