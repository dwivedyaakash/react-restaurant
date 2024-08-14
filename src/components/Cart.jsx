import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryItemCard from "./RestaurantCategoryItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="my-8 text-center text-gray-300 text-3xl">Cart</div>
      <div className="bg-slate-800 w-6/12 m-auto rounded-lg p-4">
        {cartItems.length > 0 ? (
          <div className="w-full flex justify-end">
            <button
              onClick={handleClearCart}
              className="rounded bg-slate-100 text-black mx-2 px-4 py-2 font-semibold"
            >
              Clear cart
            </button>
          </div>
        ) : (
          ""
        )}
        {cartItems.length > 0
          ? cartItems.map((cartItem, index) => (
              <RestaurantCategoryItemCard key={index} item={cartItem} />
            ))
          : "Cart is empty!"}
      </div>
    </div>
  );
};

export default Cart;
