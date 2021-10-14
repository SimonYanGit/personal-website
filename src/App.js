import Header from './components/Header'
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" exact component={About}/>
          <Route path="/experience" exact component={Experience}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
