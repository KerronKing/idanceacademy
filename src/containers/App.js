import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Homepage from "../containers/Homepage";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Registration from "../containers/Registration";
import Services from "../services/Services";
import Schedule from "../containers/Schedule";
import Events from "../containers/Events";
import Gallery from "../containers/Gallery";
import BeginnerBallet from "../services/BeginnerBallet";
import YouthBallet from "../services/YouthBallet";
import ModernDance from "../services/ModernDance";
import Jazz from "../services/Jazz";
import MarriagePackges from "../services/MarriagePackages";
import GraduationPackages from "../services/GraduationPackages";
import MiscPackages from "../services/MiscPackages";

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
        <Route path="/beginner-ballet" component={BeginnerBallet} />
        <Route path="/youth-ballet" component={YouthBallet} />
        <Route path="/modern-dance" component={ModernDance} />
        <Route path="/jazz" component={Jazz} />
        <Route path="/marriage-packages" component={MarriagePackges} />
        <Route path="/graduation-packages" component={GraduationPackages} />
        <Route path="/misc-services" component={MiscPackages} />
      </Switch>
    </div>
  );
}

export default App;
