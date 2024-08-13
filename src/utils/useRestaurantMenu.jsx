import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(MENU_URL + resId);
    const jsonData = await apiData.json();
    setApiData(jsonData);
  };

  return apiData;
};

export default useRestaurantMenu;
