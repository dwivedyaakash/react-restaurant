import { MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [apiData, setApiData] = useState([]);
  const [topPicks, setTopPicks] = useState(false);
  // true -> carousel, false -> itemCards

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(MENU_URL + resId);
    const jsonData = await apiData.json();
    setApiData(jsonData);
    if (
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.carousel != undefined
    ) {
      setTopPicks(true);
    } else if (
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards != undefined
    ) {
      setTopPicks(false);
    }
  };

  if (apiData?.length === 0 && topPicks?.length === 0) return <Shimmer />;

  return topPicks ? (
    <>
      <div className="menu-container">
        <h2>{apiData?.data?.cards[0]?.card?.card?.text}</h2>
        <h3>
          {
            apiData?.data?.cards[apiData.data.cards.length - 1]?.groupedCard
              ?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title
          }
        </h3>
        {apiData?.data?.cards[
          apiData.data.cards.length - 1
        ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel.map(
          (item) => (
            <li key={item?.dish?.info?.id}>{item?.title}</li>
          )
        )}
      </div>
    </>
  ) : (
    <>
      <div className="menu-container">
        <h2>{apiData?.data?.cards[0]?.card?.card?.text}</h2>
        <h3>
          {
            apiData?.data?.cards[apiData.data.cards.length - 1]?.groupedCard
              ?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title
          }
        </h3>
        {apiData?.data?.cards[
          apiData.data.cards.length - 1
        ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
          (item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          )
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
