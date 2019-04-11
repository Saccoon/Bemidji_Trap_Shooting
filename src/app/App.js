import React, {Fragment} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

//components
import Footer from '../components/footer/Footer'
import Navigation from '../components/navigation/Navigation'

//pages
import HomePage from '../pages/home/Home'

import * as Routes from '../constants/Routes'

const App = () =>
  <Router>
    <Fragment>
      <Navigation />
      {/* Home */}
      <Route exact path={Routes.INDEX} component={() => <HomePage/>} />

      <Footer />
    </Fragment>
  </Router>

export default App
