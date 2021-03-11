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
            width="200"
            height="60"
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

    <div class="d-flex flex-row">
  <footer class="footer">
    <div>
      <a href = "https://www.uc.edu/"> University of Cincinnati</a>
    </div>
    <div class="univ_image">
    <img
            src="https://d2jyir0m79gs60.cloudfront.net/college/logos/University_of_Cincinnati.jpg"
            width="50"
            height="50"
            alt="logo"
          ></img> 
    </div>
  </footer>
</div>

  </Router>
  );
}

export default App;
