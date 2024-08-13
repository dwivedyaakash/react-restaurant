import PropTypes from "prop-types";
import RestaurantCategoryItem from "./RestaurantCategoryItem";

const RestaurantCategory = (props) => {
  const { categories } = props.category.card.card;

  return (
    <div>
      {categories.map((category, index) => (
        <RestaurantCategoryItem key={index} item={category} />
      ))}
    </div>
  );
};

RestaurantCategory.propTypes = {
  category: PropTypes.shape({
    card: PropTypes.shape({
      card: PropTypes.shape({
        categories: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default RestaurantCategory;
