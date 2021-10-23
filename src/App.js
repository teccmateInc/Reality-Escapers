import React from 'react'
import './assets/css/App.css'
import './assets/css/Main.css'
import './assets/css/animation.css'
import MainLayout from './components/MainLayout'
import Templates from './components/Stories/Templates'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import AllSlides from './components/AllSlides'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Redirect exact from='/' to='/stories/templates' />
          <Route component={MainLayout} path='/stories/editor' />
          <Route component={Templates} path='/stories/templates' />
          <Route component={AllSlides} exact path='/stories/allSlides' />
        </Switch>
      </Router>
    </div>
  )
}
export default App
