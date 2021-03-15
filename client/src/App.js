import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav";
import SearchMain from "../src/pages/Search";
import Saved from "./components/Saved";
import API from "./utils/API"

export default function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={SearchMain}/>
        <Route exact path="saved" component={Saved} />
      </div>
    </Router>
  );
}
