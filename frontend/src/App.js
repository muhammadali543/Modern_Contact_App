import React from 'react';
import './App.css';
import Contact from './Contact';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router-dom';
import AddContact from './AddContact';
import EditContact from './EditContact';

function App() {
  return (
    <div className="contacts">
          <Switch>
            <Route exact path="/" component={Contact}/>
            <Route exact path="/create-new-contact" component={AddContact}/>
            <Route exact path="/update-contact/:id" component={EditContact}/>
          </Switch>
    </div>
  );
}

export default App;
