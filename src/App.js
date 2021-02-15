import React from 'react'
import { Switch, Route  } from 'react-router-dom'

import MainLayout from './layouts/mainlayout/mainlayout'

import Homepage from './pages/homepage/homepage'
import Learnpage from './pages/learnpage/learnpage'
import Testpage from './pages/testpage/testpage'
import Loginpage from './pages/loginpage/loginpage'
import Registrationpage from './pages/registrationpage/registrationpage'
import Resultspage from './pages/resultspage/resultspage'
import CompleteTest from './pages/testpage/completetest'
import StartTest from './pages/testpage/starttest'


function App() {
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
          <MainLayout>
            <Resultspage />
          </MainLayout>
        )} />
      </Switch>

    </div>
  )
}

export default App
