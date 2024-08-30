import RestaurantCard,{RestaurantCardPrompted} from "./RestaurantCard.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import  useActive  from "../utils/userActive.js";
import { REST_URL } from "../utils/constants.js";
import UserContext from "./UserContext.js";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const restCardPrompt = RestaurantCardPrompted(RestaurantCard);

  useEffect(() => { fetchData() }, []);
  
  const fetchData = async () => {
    const data = await fetch(REST_URL);
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //console.log(listOfRestaurants);
   const filteredList = listOfRestaurants.filter(
     (res) => res.info.avgRating > 4.5
  );
  console.log(filteredList);

  const activeStatus = useActive();
  if (activeStatus === false) {
    return (
      <h1>You are on Offline.....</h1>
    );
  };

  const { setUserName, userLogin } = useContext(UserContext);


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="">
        <div className="mx-4 p-4">
          <input
            type="text"
            className="border border-solid border-black py-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-2 my-2 px-3 py-1 border border-solid border-black rounded-md"
            onClick={() => {
              const searchedText = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurants(searchedText);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-5">
          <h1 className="font-bold text-3xl">Top Rated Restaurants</h1>
        </div>
      </div>
      <div className="flex flex-wrap m-4">
        {filteredList.map((res) => (
          <RestaurantCard resData={res} />
        ))}
      </div>
      <div>
        <input
          type="text"
          className="border-solid border-black my-8 p-1"
          value={userLogin}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="m-5">
        <h1 className="font-bold text-3xl">Restaurants with online food delivery</h1>
      </div>
      <div className="flex flex-wrap m-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;






