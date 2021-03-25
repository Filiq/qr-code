//Style
import "./styles/global.scss";
//Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import Generate from "./components/QRCodeGenerate";
import Translate from "./components/QRCodeTranslate";
//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/generate">
            <Generate />
          </Route>
          <Route exact path="/translate">
            <Translate />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
