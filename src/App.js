import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.js'
import ExerciceList from './components/exercice-list.js'
import EditExercice from './components/edit-exercice.js'
import CreateExercice from './components/create-exercice.js'
import CreateUser from './components/create-user.js'

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExerciceList} />
      <Route path="/edit/:id" component={EditExercice} />
      <Route path="/create"  component={CreateExercice} />
      <Route path="/user"  component={CreateUser} />

    </Router>
  );
}

export default App;
