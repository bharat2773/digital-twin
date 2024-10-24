import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPatient from './components/AddPatient';
import DisplayPatients from './components/DisplayPatients';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AddPatient} />
          <Route path="/patients" component={DisplayPatients} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
