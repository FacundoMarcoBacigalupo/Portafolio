import { Fragment } from "react";
import Home from './components/Home/Home.jsx'
import Proyects from "./components/Proyects/Proyects.jsx"
import Knows from "./components/Knows/Knows.jsx"
import Contact from "./components/Contact/Contact.jsx"
import NavBar from "./components/NavBar/NavBar.jsx";
import ChangeLanguage from "./components/ChangeLanguage/ChangeLanguage.jsx";

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Home />
      <Knows />
      <Proyects />
      <Contact />
      <ChangeLanguage />
    </Fragment>
  );
}

export default App;