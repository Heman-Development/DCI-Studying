


import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Title } from './component/Header/Title';
import { Vocal } from './component/Pages/Vocal';

import { Navigation } from './component/NavLink/NavLink.jsx';
import { Bass } from "./component/Pages/Bass";
import { Drums } from "./component/Pages/Drums";
import { Guitar } from "./component/Pages/Guitar";
import { Links } from "./component/Pages/Links";
import { Home } from "./component/Pages/Home";
import { BarndOfficialWebsite } from "./component/Pages/BarndOfficialWebsite";





function App() {
  return (
    <div className="App">
      <Router>
        <Title />
        <div>
          {/* <NavLink exact={true} to="/vocals">VOCALS</NavLink> {" | "} */}

        <Navigation /> 
          
       
        </div>

        <Switch>
        <Route path="/website" exact component={BarndOfficialWebsite} />
          <Route path="/vocals" exact component={Vocal} />
          <Route path="/guitar" exact component={Guitar} />
          <Route path="/bass" exact component={Bass} />
          <Route path="/drums" exact component={Drums} />
          <Route path="/links" exact component={Links} />
          <Route path="/home" exact component={Home} />
          
        </Switch>

      </Router>

     
    </div>
  );
}

export default App;
