import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Homepage from "../containers/Homepage";
import About from "../containers/about";
import Contact from "../containers/contact";
import Registration from "../containers/registration";
import Services from "../containers/services";
import Schedule from "../containers/schedule";
import Events from "../containers/events";
import Gallery from "../containers/gallery";
import Ballet from "../containers/ballet";
import ModernDance from "../containers/modern-dance";
import Jazz from "../containers/jazz";
import WeddingPackges from "../containers/services/wedding-packages";
import GraduationPackages from "../containers/services/graduation-packages";
import MiscPackages from "../containers/services/misc-packages";
import Dancercise from "../containers/dancercise";

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
        <Route path="/ballet" component={Ballet} />
        <Route path="/dancercise" component={Dancercise} />
        <Route path="/modern-dance" component={ModernDance} />
        <Route path="/jazz" component={Jazz} />
        <Route path="/wedding-packages" component={WeddingPackges} />
        <Route path="/graduation-packages" component={GraduationPackages} />
        <Route path="/misc-packages" component={MiscPackages} />
      </Switch>
    </div>
  );
}

export default App;
