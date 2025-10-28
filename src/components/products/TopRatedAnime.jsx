import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import productApi from "../../services/product";

const TopRatedAnime = () => {
  // State to hold top rated anime
  const [topAnime, setTopAnime] = useState([]);
  // Fetch top rated anime from the API
  const topRatedAnime = async () => {
    try {
      const response = await productApi.getTopAnime();
      setTopAnime(response?.data?.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    topRatedAnime();
  }, []);
  // Function to truncate product description to a specified length
  const truncateProductDescription = (text, limit) => {
    if (text && text.length <= limit) {
      return text;
    }
    return text ? text.slice(0, limit) + "..." : "";
  };
  return (
    <>
      <div className="bg-[#0C1027] py-16 px-4 overflow-hidden Week-slider">
        <h2 className="text-white text-[50px] font-bold mb-12 text-center tracking-wide uppercase">
          Top Rated Anime
        </h2>

<Swiper
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  loop={true}
  spaceBetween={15}
  className="pb-16 custom-swiper"
  breakpoints={{
    320: { slidesPerView: 1 },   // 📱 Mobile (small phones)
    480: { slidesPerView: 2 },   // 📱 Large phones
    768: { slidesPerView: 3 },   // 💻 Tablets
    1024: { slidesPerView: 4 },  // 🖥️ Small laptops
    1200: { slidesPerView: 2 },  // 🖥️ At 1200px width → show 2 slides
    1280: { slidesPerView: 5 },  // 🖥️ Desktops and up
  }}
>

          {topAnime?.map((anime, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Card className="anime-card">
                <Link to={`/products/${anime.mal_id}`} className="card-link">
                  {/* 2. Image Area */}
                  <CardMedia
                    component="img"
                    // Ensure a fixed height for uniform card appearance
                    height="300"
                    image={
                      anime.images?.webp?.large_image_url ||
                      "placeholder_image_url"
                    }
                    alt={anime.title}
                    className="card-media-image"
                  />

                  {/* 3. Content Area - Set to flex column to control internal layout */}
                  <CardContent className="card-content-area">
                    {/* Title */}
                    <Typography
                      variant="h6"
                      component="h2"
                      className="productTitle text-[25px] font-normal uppercase"
                    >
                      {anime.title}
                    </Typography>

                    {/* Wrapper for description and rating (to control spacing/positioning) */}
                    <div className="description-and-rating-wrapper">
                      {/* Description/Synopsis */}
                      <Typography
                        variant="body2"
                        component="p"
                        className="product-description text-[18px] font-normal text-white"
                      >
                        {truncateProductDescription(anime.synopsis, 100)}{" "}
                      </Typography>
                    </div>
                    <div className="flex justify-between items-center p-4">
                      <Typography
                        variant="body2"
                        component="p"
                        className="product-rating"
                      >
                        Rating: {anime.score}
                      </Typography>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TopRatedAnime;
