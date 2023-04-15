import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurant] = useState([ {
    data: {
      id: "334476",
      name: "KFC",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      avgRating: "3.8",
    },
  },
  {
    data: {
      id: "334478",
      name: "Meghna",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      avgRating: "4.8",
    },
  },
  {
    data: {
      id: "334475",
      name: "Dominos",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      avgRating: "4.6",
    },
  },]);
  

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
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
