import { fetchData } from "./axiosConfig";

// Get user's timeline
export const fetchPosts = () => fetchData.get("/posts").then((res) => res.data);
