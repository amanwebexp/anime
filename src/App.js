import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./pages/products/product";
import NotFound from "./pages/NotFound/NotFound";
import ProductSinglePage from "./pages/products/productSingle";
import HeaderTopBar from "./components/Layout/AppBar";
import Cart from "./pages/cart/cart";
import Footer from "./components/Layout/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "./components/Layout/Theme";

function App() {
  return (
    <>
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <HeaderTopBar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/products/:productId">
            <ProductSinglePage />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
