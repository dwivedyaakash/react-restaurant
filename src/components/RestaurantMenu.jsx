import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useInternetStatus from "../utils/useInternetStatus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { apiData, topPicks } = useRestaurantMenu(resId);
  const onlineStatus = useInternetStatus();

  if (onlineStatus === false)
    return (
      <div className="offline-msg flex items-center justify-center text-gray-300 text-3xl h-[80vh]">
        You are offline!
      </div>
    );

  if (apiData?.length === 0) return <Shimmer />;

  return topPicks ? (
    <>
      <div className="menu-container ml-4">
        <h2 className="text-xl py-4">
          {apiData?.data?.cards[0]?.card?.card?.text}
        </h2>
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
      <div className="menu-container ml-4">
        <h2 className="text-xl py-4">
          {apiData?.data?.cards[0]?.card?.card?.text}
        </h2>
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
