import React from 'react'
import { Switch, Route  } from 'react-router-dom'

import MainLayout from './layouts/mainlayout'

import Homepage from './pages/homepage/homepage'
import Learnpage from './pages/learnpage/learnpage'
import Testpage from './pages/testpage/testpage'
import Loginpage from './pages/loginpage/loginpage'
import Registrationpage from './pages/registrationpage/registrationpage'
import Completepage from './pages/completepage/completepage'
import Resultspage from './pages/resultspage/resultspage'


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
        <Route exact path="/learn" render={() => (
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
        <Route exact path="/login" render={() => (
          <MainLayout>
            <Loginpage />
          </MainLayout>
        )} />
      </Switch>
      <Switch>
        <Route exact path="/registration" render={() => (
          <MainLayout>
            <Registrationpage />
          </MainLayout>
        )} />
      </Switch>
      <Switch>
        <Route exact path="/complete" render={() => (
          <MainLayout>
            <Completepage />
          </MainLayout>
        )} />
      </Switch>
      <Switch>
        <Route exact path="/results" render={() => (
          <MainLayout>
            <Resultspage />
          </MainLayout>
        )} />
      </Switch>

    </div>
  )
}

export default App
