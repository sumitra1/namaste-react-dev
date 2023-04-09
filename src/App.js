import "./App.css";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/007/890/977/original/burger-logo-for-fast-food-business-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard=()=>{
  return(
    <div className="res-card">
      <h3>Meghna Foods</h3>
    </div>
  )
}

const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
      </div>
    </div>
  )
}
function App() {
  return <div>
    <Header/>
    <Body/>
  </div>;
}

export default App;
