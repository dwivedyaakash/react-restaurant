import PropTypes from "prop-types";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, areaName, costForTwo, cuisines, avgRating } =
    props.restaurant.info;

  return (
    <div className="restaurant-card ml-4 mt-4 bg-black hover:bg-slate-900 p-4 w-[250px] rounded-lg">
      <img
        className="restaurant-img rounded-lg"
        src={IMG_URL + cloudinaryImageId}
      />
      <p className="restaurant-name py-3 text-lg">{name}</p>
      <p className="restaurant-name">{areaName}</p>
      <p className="restaurant-name">{costForTwo}</p>
      <p className="restaurant-name">{cuisines.join(", ")}</p>
      <p className="restaurant-name">{avgRating}</p>
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cloudinaryImageId: PropTypes.string.isRequired,
      areaName: PropTypes.string.isRequired,
      costForTwo: PropTypes.string.isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
      avgRating: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RestaurantCard;
