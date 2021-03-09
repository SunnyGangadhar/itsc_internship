// import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Devops from "./components/devops";
import Ocat from "./components/ocat";
import Veaasfrom  from "./components/veaas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img
            src="https://itexpo20.live/static/Landing-ExpoLogo.f6ac3146.png"
            width="30"
            height="30"
            alt="logo"
          ></img>
        </a>
        <div className="ml-auto">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/devops" className="nav-link">
                DevOps
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ocat" className="nav-link">
                OCAT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/veaas" className="nav-link">
                VEaaS
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/devops">
          <Devops />
        </Route>
        <Route path="/ocat">
          <Ocat />
        </Route>
        <Route path="/veaas">
          <Veaasfrom />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
