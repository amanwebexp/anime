import React from "react";
import Button from "@mui/material/Button";
import useLocalStorageState from "use-local-storage-state";

const AddToCart = ({ product, addToCart }) => {
  // Using local storage to persist cart data
  const [cart, setCart] = useLocalStorageState("cart", []);
//  Initialize cart to an empty array if it's null or undefined
  const initializedCart = cart || [];

// Function to handle adding items to the cart
  const handleAddToCart = () => {
    const existingItemIndex = initializedCart.findIndex(
      (item) => item.mal_id === product.mal_id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...initializedCart];
      updatedCart[existingItemIndex].count++;
      setCart(updatedCart);
    } else {
      setCart([...initializedCart, { ...product, count: 1 }]);
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleAddToCart} className="bg-[#E3962B] text-black font-bold hover:bg-[#df9023]">
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCart;
