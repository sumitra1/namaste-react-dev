import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants,setAllRestaurants]=useState([])
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText]=useState("");
  
// function filterData(searchText,restaurants){
//   const filterData=restaurants.filter((restaurants)=>{
//     restaurants.data.name.includes(searchText)
//   })
// }

useEffect(()=>{
  getRestaurants();
},[])

async function getRestaurants(){
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9896194&lng=77.5927948&page_type=DESKTOP_WEB_LISTING")
  const json=await data.json();
  console.log(json);
setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
}
console.log("render")
// console.log(filteredRestaurants)

//condiional rendering
//if restaurant is empty=> shimmer UI
//if restaurant has data => actaul data UI
if (!allRestaurants) return null;
if(filteredRestaurants?.length===0){
  return <h1>No Restaurant match your filter!!</h1>
}

  return (filteredRestaurants.length===0) ?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filteredList = filteredRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
           setFilteredRestaurants(filteredList );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div>
        <input type="text"
        className="search-input"
        placeholder="Search"
        value={searchText} 
        onChange={(e)=>{setSearchText(e.target.value)}} />
        <button onClick={()=>{
          const searchedResult=allRestaurants.filter(
            (res)=>res?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
          );

          
          setFilteredRestaurants(searchedResult)
        }}>Search</button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]}/> */}
        
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

//Getting in my nerves
