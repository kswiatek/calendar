import React from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Month from 'components/Month/Month'
import Day from 'components/Day/Day'

const App = ({ mode }) => {
  return (
    <>
      <div>
        <Header />
        {mode === 'day' && <Day />}
        {mode === 'month' && <Month />}
      </div>
      <Footer />
    </>
  )
}

const mapStateToProps = state => ({ mode: state.mode })

export default connect(mapStateToProps)(App)
