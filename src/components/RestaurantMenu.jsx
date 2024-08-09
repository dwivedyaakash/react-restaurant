import { MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [apiData, setApiData] = useState([]);
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(MENU_URL + resId);
    const jsonData = await apiData.json();
    setApiData(jsonData);
    setTopPicks(
      jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .carousel
    );

    // console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    // console.log(
    //   jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    //     .carousel[0]
    // );
  };

  return apiData.length === 0 ? (
    ""
  ) : (
    <>
      <h3>{apiData.data.cards[2].card.card.info.name}</h3>
      <h3>{apiData.data.cards[2].card.card.info.id}</h3>
      <div>Top picks</div>
      {topPicks.map((item) => (
        <li key={item.dish.info.id}>
          {item.title} - Rs: {item.dish.info.price / 100}
        </li>
      ))}
    </>
  );
};

export default RestaurantMenu;
