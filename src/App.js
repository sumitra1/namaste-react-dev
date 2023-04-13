import "./App.css";
import Header from './components/Header'

import Body from './components/Body'


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
      <Body />
    </div>
  );
}

export default App;
