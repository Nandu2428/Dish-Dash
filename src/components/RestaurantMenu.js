import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestCategories from "./RestCategories";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const [h, sH] = useState(true);


  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setResInfo(json.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  
  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  

  return (
    <div className="text-center">
      <h1 className="font-bold text-lg">{name}</h1>
      <h2 className="py-5">
        {cuisines}-{costForTwoMessage}
      </h2>
      {categories.map((category,index) =>
        <RestCategories
          data={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            if (index == showIndex) {
              setShowIndex(null)
            }
            else {
              setShowIndex(index)
            }
          }}
        />
      )}
    </div>
  );
};

export default RestaurantMenu;