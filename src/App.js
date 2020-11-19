import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Friends } from './pages/Friends';
import { IndirectFriends } from './pages/IndirectFriends';
import { NotFound } from './pages/NotFound';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/friends/:userId" component={Friends} />
        <Route exact path="/friends/indirect/:userId" component={IndirectFriends} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
