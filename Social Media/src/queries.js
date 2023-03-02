import { fetchData } from "./axiosConfig";

// Get user's timeline
export const fetchPosts = () => fetchData.get("/posts").then((res) => res.data);

// Create a post
export const createPost = (bodyObject) =>
  fetchData.post("/posts", bodyObject).then((res) => res.data);

// Upload Photo
export const uploadPhoto = (bodyObject) =>
  fetchData.post("/upload", bodyObject).then((res) => res.data);
