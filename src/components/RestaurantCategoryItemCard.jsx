import PropTypes from "prop-types";
import { MENU_ITEM_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantCategoryItemCard = (props) => {
  const { name, description, price, imageId, ratings } = props.item.card.info;

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="m-4 pt-4 flex justify-between border-gray-200 border-t-2">
      <div className="w-9/12">
        <p className="text-lg">{name}</p>
        <p>Rs {price / 100}</p>
        <p className="text-xs">{description}</p>
        <div className="flex">
          <p className="mr-1">
            {JSON.stringify(ratings?.aggregatedRating) != "{}"
              ? ratings?.aggregatedRating?.rating
              : ""}
          </p>
          {JSON.stringify(ratings?.aggregatedRating) != "{}" ? (
            <p>({ratings?.aggregatedRating?.ratingCountV2})</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="relative w-3/12">
        <img className="rounded-lg" src={MENU_ITEM_IMAGE_URL + imageId} />
        <button
          onClick={() => handleAddItem(props.item)}
          className="absolute bottom-0 right-1/3 mb-2 bg-white text-black shadow-lg rounded-lg p-2"
        >
          Add +
        </button>
      </div>
    </div>
  );
};

RestaurantCategoryItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default RestaurantCategoryItemCard;
