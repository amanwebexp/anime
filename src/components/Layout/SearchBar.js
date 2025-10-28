import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, styled } from "@mui/material";

// Custom styled container for the search bar
const StyledSearchContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#000116', // Same dark background as the header
  border: '1px solid #ffcc00', // Yellow border
  borderRadius: '9999px', // Fully rounded
  display: 'flex',
  alignItems: 'center',
  padding: '4px 12px',
}));

// Custom styled input field
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#b0b0d8', // Light text color
  '& .MuiInputBase-input': {
    padding: '4px',
    paddingLeft: '8px',
  },
  flex: 1, // Allows the input to grow
}));

function SearchBar() {
  // State to hold search results and the current search term
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
// Function to handle input changes
  const setSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchProductHandler(value);
  };
// Function to fetch search results from the API
  const searchProductHandler = async (term) => {
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${term}&order_by=title&sort=asc&limit=10`
      );
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
// Clear search results when the route changes
  useEffect(() => {
    setUserData([]);
  }, [location.pathname]);   // Clear results on route change

// Clear search term and results when a result is clicked

  const handleResultClick = () => {
    setSearchTerm("");
  };

            return (
              <Box sx={{ position: 'relative' }}>
                <StyledSearchContainer>
                  <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={setSearch}
            value={searchTerm}
            sx={{
              "& input::placeholder": {
                color: "#E3962B",     
                opacity: 1,      
              },
            }}
          />

        <IconButton sx={{ color: '#E3962B' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </StyledSearchContainer>
      
      {/* Search Results Dropdown */}
      {searchTerm && userData.length > 0 && (
        <Box 
          sx={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: '#E3962B',
            border: '1px solid #E3962B',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
            overflow: 'hidden',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {userData.map((value, index) => (
              <li 
                key={index} 
                onClick={handleResultClick}
                style={{ 
                  padding: '12px', 
                  borderBottom: '1px solid #333',
                  transition: 'background-color 0.2s',
                }}
              >
                <Link to={`/products/${value.mal_id}`} style={{ textDecoration: 'none', color: '#fff' }}>
                  {value.title}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
}

export default SearchBar;
