import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route  } from 'react-router-dom'
import { checkUserSession } from './redux/User/user.actions'

import WithAuth from './hoc/withAuth'

import MainLayout from './layouts/mainlayout/mainlayout'

import Homepage from './pages/homepage/homepage'
import Calculatorpage from './pages/calculatorpage/calculatorpage'
import Testpage from './pages/testpage/testpage'
import Loginpage from './pages/loginpage/loginpage'
import Registrationpage from './pages/registrationpage/registrationpage'
import Resultspage from './pages/resultspage/resultspage'
// import CompleteTest from './pages/testpage/completetest'
import StartTest from './pages/testpage/starttest'
import Recovery from './pages/recoverypage/recoverypage'
import DashBoardLayout from './layouts/dashboardlayout/dashboardlayout'


const App = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout>
            <Homepage />
          </MainLayout>
        )} />
        <Route path="/wpm-calculator" render={() => (
          <MainLayout>
            <Calculatorpage />
          </MainLayout>
        )} />
        <Route exact path="/test" render={() => (
          <MainLayout>
            <Testpage />
          </MainLayout>
        )} />
        <Route path="/test/start" render={() => (
            <MainLayout>
              <StartTest />
            </MainLayout>
          )} />
        <Route path="/login" render={() => (
          <MainLayout>
            <Loginpage />
          </MainLayout>
        )} />
        <Route path="/recovery" render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )} />
        <Route path="/registration" render={() => (
                    <MainLayout>
                                  <Registrationpage />
                    </MainLayout>
        )} />
        <Route path="/results" render={() => (
          <WithAuth>
            <DashBoardLayout>
              <Resultspage />
            </DashBoardLayout>
          </WithAuth>
        )} />
      </Switch>

    </div>
  )
}

export default App
