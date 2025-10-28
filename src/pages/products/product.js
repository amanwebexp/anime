import productApi from "../../services/product";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/products/ProductCard";
import "swiper/css";
import { Grid, Typography } from "@mui/material";

import AnimeRecomdation from "../../components/products/AnimeRecomdation";
import TopRatedAnime from "../../components/products/TopRatedAnime";

function Products() {
  // State to hold products and characters
  const [products, setProducts] = useState([]);

  // State to manage "View More" functionality
  const [ViewMore, setViewMore] = useState(8);

  // Function to handle "View More" button click
  const handleViewMore = (par) => {
    setViewMore(par);
  };

  // Function to fetch all products from the API
  const getAllProducts = async () => {
    try {
      const response = await productApi.getAllProduct();
      const productsArray = Object.values(response.data);

      setProducts(productsArray);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="relative h-screen w-full text-white banner-wrapper ">
        {/* Overlay */}
        <div className="absolute inset-0 z-10"></div>
        {/* Centered content wrapper */}
        <div className="absolute top-1/2 left-1/2 z-20 uppercase font-medium transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1750px] px-6 mx-auto banner">
          <h1 className="text-[78px] font-bold text-[#10f4ff]  discover-all">
            Discover all <br />{" "}
            <span className="text-white"> the best manga </span>
          </h1>
          <h2 className="text-[78px] font-bold text-white text-right mt-4  discover-all-sub">
            Series at <br />{" "}
            <span className="text-[#10f4ff]"> great prices </span>
          </h2>
        </div>
      </div>
      <AnimeRecomdation />

      <div className="product h-auto">
        <div className=" max-w-[1780px] mx-auto px-4">
          <Typography
            variant="h4"
            className="text-[50px] font-bold mb-8 text-white pt-20 tracking-wide"
          >
            Anime Products
          </Typography>
          <Grid container spacing={4} className="product-column rounded-lg">
            {products.length > 0 ? (
              products[1].slice(0, ViewMore)?.map((anime, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className="product-collunm"
                >
                  <ProductCard anime={anime} />
                </Grid>
              ))
            ) : (
              <Typography className="loader" variant="body1">
                Loading...
              </Typography>
            )}

            {/* For View More */}
            {ViewMore === 8 && (
              <span
                onClick={() => handleViewMore(products[1].length)}
                className="bg-transparent cursor-pointer text-white px-6 py-2 rounded-full border border-white transition-all duration-300 hover:bg-[#10f4ff] hover:text-black mb-8 mx-auto mt-10"
              >
                View More
              </span>
            )}
          </Grid>
        </div>
      </div>

      <TopRatedAnime />
    </>
  );
}

export default Products;
