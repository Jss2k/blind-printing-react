import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route  } from 'react-router-dom'
import { checkUserSession } from './redux/User/user.actions'

import WithAuth from './hoc/withAuth'

import MainLayout from './layouts/mainlayout/mainlayout'

import Homepage from './pages/homepage/homepage'
import Learnpage from './pages/learnpage/learnpage'
import Testpage from './pages/testpage/testpage'
import Loginpage from './pages/loginpage/loginpage'
import Registrationpage from './pages/registrationpage/registrationpage'
import Resultspage from './pages/resultspage/resultspage'
import CompleteTest from './pages/testpage/completetest'
import StartTest from './pages/testpage/starttest'
import Recovery from './pages/recoverypage/recoverypage'


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
      </Switch>
      <Switch>
        <Route path="/learn" render={() => (
          <MainLayout>
            <Learnpage />
          </MainLayout>
        )} />
      </Switch>
      <Switch>
        <Route exact path="/test" render={() => (
          <MainLayout>
            <Testpage />
          </MainLayout>
        )} />
      </Switch>
      <Switch>
        <Route path="/test/start" render={() => (
            <MainLayout>
              <StartTest />
            </MainLayout>
          )} />
      </Switch>
      <Switch>
          <Route path="/test/complete" render={() => (
            <MainLayout>
              <CompleteTest />
            </MainLayout>
          )} />
      </Switch>
      <Switch>
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
      </Switch>
      <Switch>
        <Route path="/registration" render={() => (
          <MainLayout>
            <Registrationpage />
          </MainLayout>
        )} />
      </Switch>
      <Switch>
        <Route path="/results" render={() => (
          <WithAuth>
            <MainLayout>
              <Resultspage />
            </MainLayout>
          </WithAuth>
        )} />
      </Switch>

    </div>
  )
}

export default App
