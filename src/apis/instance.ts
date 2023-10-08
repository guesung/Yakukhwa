import axios from "axios";
export const instance = axios.create({
  baseURL: "https://firestore.googleapis.com/v1",
});
