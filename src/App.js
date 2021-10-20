import './App.css';
import NavComponent from './NavComponent';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Playbook from './Playbook';

function App() {
  return (
    <Router>

      <div className="App">
        <NavComponent />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/playbook" component={Playbook} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>
      HOME PAGE
    </h1>
  </div>
);
export default App;
