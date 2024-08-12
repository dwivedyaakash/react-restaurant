import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
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

  return { apiData, topPicks };
};

export default useRestaurantMenu;
