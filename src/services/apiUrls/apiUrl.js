import axios from "axios";

export const baseURL = "https://upskilling-egypt.com:3006/api/v1";
export const imgURL = "https://upskilling-egypt.com:3006/";

export const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: localStorage.getItem("token") },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});


export const users = {
  createUser: "/Users/Register",
  verifyUser: "/Users/verify",
  getAllusers: (pageSize, pageNu, userName) =>
    `/Users/?pageSize=${pageSize}&pageNumber=${pageNu}&userName=${userName}`,
  deleteUser: (id) => `/Users/${id}`,

  getUserById: (id) => `/Users/${id}`,
  ChangePassword:`/Users/ChangePassword`
};

//categor
export const category = {
  getAllCategory: (pageSize, pageNumber, name) =>
    `/Category/?pageSize=${pageSize}&pageNumber=${pageNumber}&name=${name}`,
  addCateory:`/Category`
};

//categor
export const recipi = {
  geRecpi: (paramId) => `/Recipe/${paramId}`,
  updateRecipi: (paramId) => `/Recipe/${paramId}`,
  addRecpi: `/Recipe/`,
  getAllRecpi:`/Recipe/`,
}


//userrecipi

export const userRecipe = {
  getFav:`/userRecipe/`,
  AddToFav:`/userRecipe/`,
  deleteFav:(id)=>`/userRecipe/${id}`


}