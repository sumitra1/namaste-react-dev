import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurant] = useState(resList);
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btnkk"
          onClick={() => {
           const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
           setListOfRestaurant(filteredList );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]}/> */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

//Getting in my nerves
