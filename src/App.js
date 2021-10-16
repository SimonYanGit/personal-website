import Header from './components/Header'
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/experience" exact component={Experience}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
