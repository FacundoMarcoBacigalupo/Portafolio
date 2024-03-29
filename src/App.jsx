import { Fragment } from "react";
import Home from './components/Home/Home.jsx'
import Proyects from "./components/Proyects/Proyects.jsx"
import Knows from "./components/Knows/Knows.jsx"
import Contact from "./components/Contact/Contact.jsx"


function App() {
  return (
    <Fragment>
      <Home />
      <Knows />
      <Proyects />
      <Contact />
    </Fragment>
  );
}

export default App;