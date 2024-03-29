import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime,}=resData?.data;
    const styleCard = {
        backgroundColor: "#f0f0f0",
      };
       
    return (
       <div className="res-card" style={styleCard}>
         <img 
         className="res-logo"
         src={CDN_URL+cloudinaryImageId} />
         <h3>{name}</h3>
         <h4>{avgRating}</h4>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{costForTwo/100} FOR TWO</h4>
         <h4>{deliveryTime} minutes</h4>
   
       </div>
     );
   };

   export default RestaurantCard