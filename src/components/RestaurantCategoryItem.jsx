import PropTypes from "prop-types";
import RestaurantCategoryItemCard from "./RestaurantCategoryItemCard";
import { useState } from "react";

const RestaurantCategoryItem = (props) => {
  const { title, itemCards } = props.item;
  const [showHideMenuItem, setShowHideMenuItem] = useState(true);

  const handleClick = () => {
    setShowHideMenuItem(!showHideMenuItem);
  };

  return (
    <div className="bg-slate-700 w-6/12 mx-auto shadow-lg rounded-lg">
      <div
        className="mt-4 p-4 font-bold text-lg flex justify-between cursor-pointer rounded-lg bg-slate-600 hover:bg-slate-500"
        onClick={handleClick}
      >
        <h3>
          {title} ({itemCards.length})
        </h3>
        <p>🔽</p>
      </div>
      {showHideMenuItem &&
        itemCards.map((item, index) => (
          <RestaurantCategoryItemCard key={index} item={item} />
        ))}
    </div>
  );
};

RestaurantCategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RestaurantCategoryItem;
