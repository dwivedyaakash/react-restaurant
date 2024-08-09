import PropTypes from "prop-types";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const name = props?.restaurant?.info?.name;
  const imgId = props.restaurant.info.cloudinaryImageId;
  const areaName = props.restaurant.info.areaName;
  const costForTwo = props.restaurant.info.costForTwo;
  const cuisines = props.restaurant.info.cuisines;
  const avgRating = props.restaurant.info.avgRating;

  return (
    <div className="restaurant-card">
      <img className="restaurant-img" src={IMG_URL + imgId} />
      <p className="restaurant-name">{name}</p>
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
