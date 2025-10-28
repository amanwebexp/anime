import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import productApi from "../../services/product";
import { Link } from "react-router-dom";
const AnimeRecomdation = () => {
  const [recommendationAnime, setRecommendationAnime] = useState([]);
  // Fetch characters from the API
  const getRecommendationAnime = async () => {
    try {
      const response = await productApi.getRecommendation();
      const allAnime =
        response?.data?.data?.map((item) => item?.entry[1]) || [];

      // Shuffle the array
      const shuffled = allAnime.sort(() => 0.5 - Math.random());

      // Pick first 3 random records
      const randomThree = shuffled.slice(0, 3);

      setRecommendationAnime(randomThree);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  //  Use useEffect to fetch data on component mount
  useEffect(() => {
    getRecommendationAnime();
  }, []);
  return (
    <>
      {/* these three  */}

      <div className=" slider-wrapper">
        <div className=" max-w-[1780px] mx-auto px-4">
          {/* Top Heading Section */}
          <div className="flex justify-between slider items-center mb-10 font-medium">
            <h2 className="text-[25px] text-white font-normal uppercase">
              Step into the Kawaii portfolio
            </h2>

            <h3 className="text-[50px] text-white uppercase">
              Where Ghibli magic
              <br /> meets every brush
            </h3>
          </div>

          {/* Grid Section */}
         <Grid container spacing={4}>
  {recommendationAnime?.map((item, index) => (
    <Grid
      key={index}
      item
      xs={12}   // 1 item per row on mobile
      sm={6}    // 2 items per row on small screens
      md={4}    // 3 items per row on medium (≥900px) and larger
    >
      <Link to={`/products/${item.mal_id}`}>
        <div className="flex flex-col text-left product-outer">
          {/* Image wrapper with fixed ratio + hover zoom */}
          <div className="relative overflow-hidden w-full aspect-[3/4] group">
            <img
              src={item.images?.webp?.image_url}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Heading and subtitle */}
          <h3 className="mt-4 text-[#E3962B] text-[30px] font-bold uppercase">
            {item.title}
          </h3>
        </div>
      </Link>
    </Grid>
  ))}
</Grid>

        </div>
      </div>
    </>
  );
};

export default AnimeRecomdation;
