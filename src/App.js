// import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Devops from "./components/devops";
import Ocat from "./components/ocat";
import Veaasfrom from "./components/veaas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const rel = { rel: "nofollow" };
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWSv5Wb0BsFX8EKwTwZGrrdsfxG8ND9n0JA&usqp=CAU"
              width="60"
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
              <li className="search_icon">
                <Link to="/search" className="nav-link">
                <i class="bi bi-search"></i>
                  Search
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

        <div class="d-flex bg-dark">
          <footer class="footer">
            <div>
              <a href="https://www.uc.edu/" target = "_blank" {...rel} > University of Cincinnati</a>
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

      </div>
    </Router>
  );
}

export default App;
