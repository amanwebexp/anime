import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Container,
  Typography,
} from "@mui/material";
import useLocalStorageState from "use-local-storage-state";

const Cart = () => {
  // Using local storage to persist cart data
  const [cart = [], setCart] = useLocalStorageState("cart");

  // Function to handle incrementing item quantity
  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
    setCart(updatedCart);
  };

  // Function to handle decrementing item quantity
  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count -= 1;
      setCart(updatedCart);
    }
  };

  // Function to handle deleting an item from the cart
  const handleDelete = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <div className="bg-[#000927] min-h-screen">
        <div className="relative z-10 w-full">
          <img
            src="/anime-bg-single.jpg"
            alt="Background"
            className="w-full h-auto object-cover"
          />

          {/* Centered Title */}
          <span className="absolute inset-0 flex items-center justify-center text-white text-6xl md:text-8xl font-extrabold drop-shadow-lg">
            Cart
          </span>
        </div>

        <div className="card-bg pt-28 pb-28">
          <Typography
            variant="h4"
            className="text-[40px] pl-48 font-bold mb-8 text-white shopping-cart"
          >
            Shopping Cart{" "}
          </Typography>
          <Container
            maxWidth="lg"
            className="  bg-[#182e24] p-20 border-2 border-solid border-[#182e24] shadow-2xl"
          >
            <TableContainer
              component={Paper}
              className="bg-[#182e24] shadow-none"
            >
              {cart.length === 0 ? (
                <>
                  <div className="flex flex-col items-center justify-center  text-center">
                    <Typography className="text-white text-2xl">
                      Your cart is empty.
                    </Typography>
                    <Button
                      href="/"
                      variant="contained"
                      className="mt-4 bg-[#10f4ff] text-black hover:bg-[#c6851f]"
                    >
                      Go to Products
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Table
                    sx={{
                      borderCollapse: "collapse",
                      "& td, & th": { border: 0 },
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell className="!text-white text-[20px]">Image</TableCell>
                        <TableCell className="!text-white text-[20px]">Item</TableCell>
                        <TableCell className="!text-white text-[20px]">Quantity</TableCell>
                        <TableCell className="!text-white text-[20px]">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="!text-white">
                      {cart.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="!text-white">
                            <img
                              src={`${row.images.jpg.image_url}`}
                              width="50px"
                              height="50px"
                              alt={row.title}
                            />
                          </TableCell>
                          <TableCell className="!text-white text-[20px]">
                            {row.title}
                          </TableCell>
                          <TableCell className="!text-white text-[20px]">
                            <Button
                              onClick={() => handleDecrement(index)}
                              className="!text-white"
                            >
                              -
                            </Button>
                            {row.count}
                            <Button
                              onClick={() => handleIncrement(index)}
                              className="!text-white"
                            >
                              +
                            </Button>
                          </TableCell>
                          <TableCell className="!text-white text-[20px]">
                            <Button
                              onClick={() => handleDelete(index)}
                              className="!text-white"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              )}
            </TableContainer>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Cart;
