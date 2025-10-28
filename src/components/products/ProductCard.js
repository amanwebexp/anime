import React from "react";
// Using @mui/material for Material-UI components
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import AddToCart from "./AddToCart"; // Importing AddToCart component
import { Link } from "react-router-dom";

const ProductCard = ({ anime }) => {
  // Function to truncate long descriptions
  const truncateProductDescription = (text, limit) => {
    if (text && text.length <= limit) {
      return text;
    }
    return text ? text.slice(0, limit) + "..." : "";
  };

  return (
    <>
      {/* // 1. Apply the custom class for dark background and no shadow */}
     <Card className="anime-card">
      <Link to={`/products/${anime.mal_id}`} className="card-link">
        
        {/* 2. Image Area */}
        <CardMedia
          component="img"
          // Ensure a fixed height for uniform card appearance
          height="300" 
          image={anime.images?.jpg?.image_url || "placeholder_image_url"}
          alt={anime.title}
          className="card-media-image"
        />
        
        {/* 3. Content Area - Set to flex column to control internal layout */}
        <CardContent className="card-content-area">
          
          <Typography variant="h6" component="h2" className="productTitle">
            {anime.title}
          </Typography>

          {/* Wrapper for description and rating (to control spacing/positioning) */}
          <div className="description-and-rating-wrapper">
              {/* Description/Synopsis */}
              <Typography variant="body2" component="p" className="product-description pr-6">
                {truncateProductDescription(anime.synopsis, 100)}{" "}
              </Typography>
              
              {/* Rating - positioned via CSS Flexbox to bottom-right */}
              <Typography variant="body2" component="p" className="product-rating pr-8                                                                ">
                Rating: {anime.score}
              </Typography>
          </div>
        </CardContent>
      </Link>
      
      {/* 4. Button Area - Separate wrapper for controlled padding/background */}
      <div className="card-button-wrapper">
        <AddToCart product={anime} addToCarts={AddToCart} />
      </div>
    </Card>
   </>
  );
};

export default ProductCard;
