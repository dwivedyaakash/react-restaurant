import { MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    // console.log(apiData);
    if (
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.carousel != undefined
    ) {
      setTopPicks(true);
      // console.log("carousel");
    } else if (
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards != undefined
    ) {
      setTopPicks(false);
      // console.log("itemCards");
    }
  };

  if (apiData?.length === 0 && topPicks?.length === 0)
    return <div>Loading...</div>;

  return topPicks ? (
    <>
      <div>
        <h1>restro name here</h1>
        <h3>
          {
            apiData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[1]?.card?.card?.title
          }
        </h3>
        {apiData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel.map(
          (item) => (
            <li key={item?.dish?.info?.id}>{item?.title}</li>
          )
        )}
      </div>
    </>
  ) : (
    <>
      <div>
        <h1>restro name here</h1>
        <h3>
          {
            apiData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[1]?.card?.card?.title
          }
        </h3>
        {apiData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
          (item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          )
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
