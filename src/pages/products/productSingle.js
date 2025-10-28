import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, CircularProgress } from "@mui/material";
import productApi from "../../services/product";
import AddToCart from "../../components/products/AddToCart";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../components/products/ProductCard";

const ProductSinglePage = () => {
  // Get productId from URL parameters
  const { productId } = useParams();
  // State to hold product data and loading status
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  // State to hold all products for the "More Products" section
  const [products, setProducts] = useState([]);

  // Function to fetch single product data from the API
  const getSingleProduct = async () => {
    try {
      const response = await productApi.getSingleProduct(productId);
      if (response.status === 200) {
        setProductData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
    setLoading(false); // Set loading to false after response or error
  };

  // Fetch product data when productId changes
  useEffect(() => {
    getSingleProduct();
  }, [productId]); // Re-run when productId changes

  // Function to fetch all products for the "More Products" section
  const getAllProducts = async () => {
    try {
      const response = await productApi.getAllProduct();
      const productsArray = Object.values(response.data);
      setProducts(productsArray);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  // Fetch all products on component mount
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div className="bg-[#000927] text-[#D9D9D9] mb-0">
        <div className="relative z-10 w-full banner-wrp">
          <img
            src="/anime-bg-single.jpg"
            alt="Background"
            className="w-full h-auto object-cover"
          />

          {/* Centered Title */}
          <span className="absolute inset-0 flex items-center justify-center text-white text-6xl font-extrabold drop-shadow-lg season">
            {productData?.title}
          </span>
        </div>

        <div className="product-bg">
          <div>
            {loading ? (
              <div className=" text-white  flex justify-center items-center min-h-[70vh] ">
                <CircularProgress />
              </div>
            ) : productData ? (
              <>
                <div className="text-white flex justify-center code-geass">
  <div
    className="flex shadow-lg p-48 mt-8 code-item-wrp w-full max-w-[2400px]
    xl:flex-row flex-col xl:p-48 p-8 xl:mt-8 mt-4"
  >
    {/* Image Section - 40% (100% width below 1200px) */}
    <div className="xl:w-[40%] w-full flex-shrink-0 code-img">
      <img
        src={productData.images?.webp?.large_image_url}
        alt={productData.title}
        className="w-full h-[630px] object-cover rounded-lg"
      />
    </div>

    {/* Content Section - 60% (100% width below 1200px) */}
    <div
      className="xl:w-[60%] w-full grid grid-cols-1 gap-8 xl:ml-24 ml-0 mt-12 xl:mt-0 code-inner"
    >
      <div>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className="text-white !text-[40px]"
        >
          {productData.title}
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          className="text-white"
        >
          <span className="text-[#D9D9D9] text-[26px]">Score: </span>
          {productData.score}
        </Typography>
        <Typography variant="body1" className="text-white mb-4">
          <div className="text-[#FFFFFF] text-[26px]">Synopsis</div>
          <p className="text-[16px]">{productData.synopsis}</p>
        </Typography>

        <div className="grid grid-cols-2 gap-16 mb-6 text-white text-[22px] ranked">
          {/* Left Column */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Typography variant="body1">Ranked#</Typography>
              <Typography variant="body1">
                {productData.rank || "N/A"}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant="body1">Popularity#</Typography>
              <Typography variant="body1">
                {productData.popularity || "N/A"}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant="body1">Members</Typography>
              <Typography variant="body1">
                {productData.members || "N/A"}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant="body1">Airing</Typography>
              <Typography variant="body1">
                {productData.airing ? "Yes" : "No"}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant="body1">Studio</Typography>
              <Typography variant="body1">
                {productData.studios?.length || "N/A"}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant="body1">Year</Typography>
              <Typography variant="body1">
                {productData.year || "N/A"}
              </Typography>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-2 text-white !text-[22px] ranked">
            <div className="flex justify-between">
              <Typography variant="body1">Type</Typography>
              <Typography variant="body1">
                {productData.type || "N/A"}
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography variant="body1">Episodes</Typography>
              <Typography variant="body1">
                {productData.episodes || "N/A"}
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography variant="body1">Duration</Typography>
              <Typography variant="body1">
                {productData.duration || "N/A"}
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography variant="body1">Rating</Typography>
              <Typography variant="body1">
                {productData.rating || "N/A"}
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography variant="body1">Status</Typography>
              <Typography variant="body1">
                {productData.status || "N/A"}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart Section */}
      <div className="">
        <AddToCart product={productData} />
      </div>
    </div>
  </div>
</div>



           
              </>
            ) : (
              <>
                <div className="relative z-30 text-white  flex justify-center items-center min-h-[70vh]">
                  <Typography
                    variant="body1"
                    align="center"
                    className="relative z-30 text-white p-10 "
                  >
                    <span className="mt-72 text-3xl">
                      {" "}
                      No product data found
                    </span>
                  </Typography>
                </div>
              </>
            )}
          </div>
        <div className="py-16 px-4 overflow-hidden mt-36 max-w-[1748px] mx-auto tracking-outside-wrp">
  <h2 className="text-white text-[50px] font-bold mb-12 tracking-wide uppercase relative z-30">
    More Products
  </h2>

  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    loop={true}
    spaceBetween={15}
    breakpoints={{
      320: { slidesPerView: 1 }, // Mobile
      480: { slidesPerView: 2 }, // Small devices
      768: { slidesPerView: 3 }, // Tablets
      1024: { slidesPerView: 4 }, // Laptops
      1280: { slidesPerView: 5 }, // Desktops
    }}
    className="pb-16 custom-swiper"
  >
    {products[1]?.map((anime, index) => (
      <SwiperSlide key={index} className="flex justify-center">
        <ProductCard anime={anime} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        </div>
      </div>
    </>
  );
};

export default ProductSinglePage;
