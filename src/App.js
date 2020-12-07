
import './App.css';
import Header from './Header';
import {BrowserRouter as Router , Switch , Route, Link} from 'react-router-dom'
import TinderCard from 'react-tinder-card';
import TinderCards from './TinderCards'
import SwipeButtons from './Swipebuttons';
function App() {
  return (
            <Router>
              <Switch>
              <Route path="/chat">I am in chat</Route>
          <Route path="/"><Header>
            </Header>
            <TinderCards></TinderCards> 
            <SwipeButtons></SwipeButtons> </Route>
          


  </Switch>
  </Router>
  );
}

export default App;
