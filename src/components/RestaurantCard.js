import { useContext } from "react";
import { CDN_URL } from "../utils/constants"; 
import UserContext from "./UserContext";
const RestaurantCard = (props) => {
  const { resData } = props;
  
  const { userLogin } = useContext(UserContext);
  return (
    <div className="m-2 p-2 w-[220px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={
          CDN_URL+resData.info.cloudinaryImageId
        }
        className="w-[210px] h-[160px]"
      ></img>
      <h3 className="font-bold py-3 text-l">{resData.info.name}</h3>
      <h4 className="py-1">{resData.info.cuisines.join(", ")}</h4>
      <h4 className="py-1">{resData.info.avgRating}/5</h4>
      <h4 className="py-1">{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime}</h4>
    </div>
  );
};

export const RestaurantCardPrompted = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <Label>Prompted</Label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};



export default RestaurantCard;
