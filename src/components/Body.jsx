import { API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useInternetStatus from "../utils/useInternetStatus";

const Error = () => {
  return (
    <div className="no-restaurants-error">Error no restaurants found!</div>
  );
};

const Body = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showNoRestaurantsError, setShowNoRestaurantsError] = useState(false);
  const onlineStatus = useInternetStatus();

  useEffect(() => {
    fetchData();
  }, []);

  if (onlineStatus === false)
    return (
      <div className="offline-msg flex items-center justify-center text-gray-300 text-3xl h-[80vh]">
        You are offline!
      </div>
    );

  const fetchData = async () => {
    const apiData = await fetch(API_URL);
    const jsonData = await apiData.json();
    setData(
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredData(
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // console.log("body rendered");

  return data?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="mx-2 mb-4 flex justify-between">
        <button
          className="top-restaurants-btn rounded bg-slate-100 text-black mx-2 px-4 py-2"
          onClick={() => {
            const filteredList = data.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setSearchText("");
            setFilteredData(filteredList);
            setShowNoRestaurantsError(false);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <input
            className="search-input-field rounded bg-slate-100 text-black mx-2 px-4 py-2"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="clear-search-btn rounded bg-slate-100 text-black mx-2 px-4 py-2"
            onClick={() => {
              setSearchText("");
              setShowNoRestaurantsError(false);
              setFilteredData(data);
            }}
          >
            x
          </button>
          <button
            className="search-btn rounded bg-slate-100 text-black mx-2 px-4 py-2"
            onClick={() => {
              if (searchText == "") return;
              const filteredList = data.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredData(filteredList);
              if (filteredList.length === 0) {
                setShowNoRestaurantsError(true);
              } else {
                setShowNoRestaurantsError(false);
              }
            }}
          >
            Search
          </button>
        </div>
      </div>
      <h3 className="restaurants-title ml-4 text-xl">
        Top restaurant chains in Bangalore
      </h3>
      {showNoRestaurantsError ? <Error /> : ""}
      <div className="restaurant-container flex flex-row flex-wrap mb-10">
        {filteredData?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
