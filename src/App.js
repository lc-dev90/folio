import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Footer />
    </Router>
  );
};

export default App;
