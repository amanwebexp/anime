import ApiClient from "./apiClient.js";

const productApi = {
  // Function to get all products
  getAllProduct: () => {
    return ApiClient.get("/anime");
  },
  // Function to get a single product by ID
  getSingleProduct: (id) => {
    return ApiClient.get(`/anime/${id}`);
  },
  // Function to search products by a search term
  getSearchProduct: (key) => {
    return ApiClient.get(`/anime/?q=${key}&order_by=title&sort=asc&limit=10`);
  },
  // Function to get characters
  getCharacter: () => {
    return ApiClient.get(`/characters`);
  },
  getAnimeCharacter: (id) => {
    return ApiClient.get(`/anime/${id}/characters`);
  },
  getTopAnime: () => {
    return ApiClient.get(`/top/anime`);
  },
  getRecommendation: () => {
    return ApiClient.get(`/recommendations/anime`);
  },getAnimeStaff: (id) => {
    return ApiClient.get(`/anime/${id}/staff`);
  }
};

export default productApi;
