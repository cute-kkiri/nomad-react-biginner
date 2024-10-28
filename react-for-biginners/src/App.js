import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        { /* <Route path="/movie/:chillitomato"> // :이후에 주는 값이 URL이 받은 변수명을 정해주는 것. :변수명 (chillitomato로 URL이 받는 것이고 useParams가 component에 변수값을 넘겨줌.) */}
        <Route path="/movie/:id"> {/* :id => URL이 id로 변수를 받을거라고 말하는 것. */}
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
