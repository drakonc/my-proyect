import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MasterComponent from './layouts/admin/MasterComponent';
import LoginMasterComponent from './layouts/login/LoginMasterComponent';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MasterComponent}></Route>
          <Route path="/login" exact component={LoginMasterComponent}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
