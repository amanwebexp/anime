import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartTotal from "../products/CartTotal";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Container, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Custom-styled button
const StyledButton = styled(Button)(() => ({
  backgroundColor: "#E3962B",
  color: "#000000",
  fontWeight: 500,
  borderRadius: "9999px",
  padding: "8px 20px",
  fontSize: "15px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#d28525",
  },
}));

// Custom-styled cart button
const StyledCartButton = styled(Button)(() => ({
  color: "#E3962B",
  fontWeight: "bold",
  borderRadius: "9999px",
  padding: "8px 12px",
  minWidth: "auto",
}));

function HeaderTopBar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <Box
      className="header-nav"
      sx={{
        display: "flex",
        height: "70px",
        "@media (max-width: 1200px) and (min-width: 360px)": {
          height: "56px",
        },
      }}
    >
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#000116",
          boxShadow: "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: "1750px", mx: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1,
            }}
          >
            {/* Logo */}
            <Typography
              sx={{ flexGrow: 1, color: "#ffcc00", fontWeight: "bold" }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <img src="/Anime.png" alt="Logo" width="130" height="51" />
              </Link>
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <SearchBar />
              <StyledButton>Get in touch</StyledButton>
              <StyledCartButton>
                <CartTotal />
              </StyledCartButton>
            </Box>

            {/* Mobile Hamburger Button */}
            <IconButton
              onClick={() => setMenuOpen(!menuOpen)}
              sx={{
                display: { xs: "flex", lg: "none" },
                color: "#E3962B",
              }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <Box
              sx={{
                display: { xs: "flex", lg: "none" },
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                pb: 3,
                mt: 2,
              }}
            >
              <Grid container spacing={12}>
                <Grid item xs={8}>
                  <SearchBar />
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <StyledCartButton fullWidth className="search-cart">
                    <CartTotal />
                  </StyledCartButton>
                </Grid>
              </Grid>

              <StyledButton fullWidth>Get in touch</StyledButton>
            </Box>
          )}
        </Container>
      </AppBar>

      {/* Offset content below header */}
      <Box sx={{ height: 80 }} />
    </Box>
  );
}

export default HeaderTopBar;
