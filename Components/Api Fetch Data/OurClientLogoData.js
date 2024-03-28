// api.js
import axios from "axios";

const API_BASE_URL = "https://designticks.com/wp-json/wp/v2";

export const fetchClientLogos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/client-logo`);
    const responseData = response.data || []; // Ensure responseData is an array
    const extractedData = responseData.map((post) => ({
      title: post.title?.rendered || "Untitled", // Use optional chaining to handle possible undefined
      imageUrl: post.yoast_head_json?.og_image?.[0]?.url || "DefaultImageUrl", // Use optional chaining to handle possible undefined
    }));
    return extractedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
