import React, { useState } from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header/Header'
import Month from 'components/Month/Month'
import Day from 'components/Day/Day'

const App = ({mode}) => {
  // const [mode, setMode] = useState('month')

// console.log('app props', props)
  return (
    <>
      <Header />
      {mode === 'day' && <Day />}
      {mode === 'month' && <Month />}
    </>
  )
}

const mapStateToProps = state => ({mode: state.mode})

export default connect(mapStateToProps)(App)
// export default App
