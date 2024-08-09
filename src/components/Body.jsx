import { API_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

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

  useEffect(() => {
    fetchData();
  }, []);

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        className="search-input-field"
        placeholder="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="clear-search-btn"
        onClick={() => {
          setSearchText("");
          setShowNoRestaurantsError(false);
          setFilteredData(data);
        }}
      >
        x
      </button>
      <button
        className="search-btn"
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
      <button
        className="top-restaurants-btn"
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
      <h3 className="restaurants-title">Top restaurant chains in Bangalore</h3>
      {showNoRestaurantsError ? <Error /> : ""}
      <div className="restaurant-container">
        {filteredData?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
