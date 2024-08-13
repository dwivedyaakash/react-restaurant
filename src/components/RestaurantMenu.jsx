import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useInternetStatus from "../utils/useInternetStatus";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const apiData = useRestaurantMenu(resId);
  const onlineStatus = useInternetStatus();

  if (onlineStatus === false)
    return (
      <div className="offline-msg flex items-center justify-center text-gray-300 text-3xl h-[80vh]">
        You are offline!
      </div>
    );

  if (apiData?.length === 0) return <Shimmer />;

  const categories = apiData?.data?.cards[
    apiData.data.cards.length - 1
  ]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) =>
    card.card?.card["@type"].includes("NestedItemCategory")
  );

  if (categories.length < 1)
    return (
      <div className="flex items-center justify-center text-gray-300 text-3xl h-[80vh]">
        Data not found!
      </div>
    );

  return (
    <>
      <div className="menu-container p-4">
        <h2 className="my-8 text-center text-gray-300 text-3xl">
          {apiData?.data?.cards[0]?.card?.card?.text}
        </h2>
        <div>
          {categories.map((category, index) => (
            <RestaurantCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
