import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "../containers/Homepage";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Registration from "../containers/Registration";
import Services from "../containers/Services";
import Schedule from "../containers/Schedule";
import Events from "../containers/Events";
import Gallery from "../containers/Gallery";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/registration" component={Registration} />
        <Route path="/services" component={Services} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/events" component={Events} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;
