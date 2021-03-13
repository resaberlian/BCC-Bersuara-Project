import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from "./pages/Register";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
import Profilpic from "./pages/Profilpic";
import About from "./pages/About";
import ProfilTalent from "./pages/ProfilTalent";
import BorkmarkA from "./pages/BookmarkAntrian";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profilpic" component={Profilpic} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profiltalent" component={ProfilTalent} /> 
        <Route exact path="/bookmarkAntrian" component={BorkmarkA} /> 
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
