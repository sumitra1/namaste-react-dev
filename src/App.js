import "./App.css";
import Header from './components/Header'
import Body from './components/Body'
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
     
      <Outlet/>
    </div>
  );
}




export default App;
