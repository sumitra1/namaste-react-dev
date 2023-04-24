import "./App.css";
import Header from './components/Header'
import Body from './components/Body'
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *    - RestaurantCard
 *      -Img
 *      -Name of Res, Star Rating, cuisine
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

function App() {
  return (
    <div>
      <Header />
     
      <Outlet/>
    </div>
  );
}




export default App;
