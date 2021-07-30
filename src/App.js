import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
