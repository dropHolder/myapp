import React from 'react';
import Main from '../Main/Main';
import Event from '../Event/Event';
import Wooder from '../Wooder/Wooder';
import Waxom from '../Waxom/Waxom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/event' component={Event} />
          <Route exact path='/wooder' component={Wooder} />
          <Route exact path='/waxom' component={Waxom} />
          <Route exact path='/waxom23' component={Waxom} />
        </Switch>
      </Router>
    );
  }
}

export default App;
