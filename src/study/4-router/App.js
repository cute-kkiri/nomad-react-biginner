import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  /* 
    router를 render
    - router는 URL을 보고있는 component이다.
    - URL에 따라서 다른 component를 보는 것.
  */

  return (
    <Router>
      <Switch>
        {/* path에 적힌 URL에 따라서 component를 render함. */}
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/"> {/* / => Home */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
