import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Modules/shared/components/AuthLayout/AuthLayout";
import ForgetPass from "./Modules/authentication/components/ForgetPass/ForgetPass";
import Login from "./Modules/authentication/components/Login/Login";
import Registration from "./Modules/authentication/components/Registration/Registration";
import ResetPass from "./Modules/authentication/components/ResetPass/ResetPass";
import RecipeList from "./Modules/recipe/components/RecipeList/RecipeList";
import CategoriesList from "./Modules/categories/components/CategoriesList/CategoriesList";
import CategoriesData from "./Modules/categories/components/CategoriesData/CategoriesData";
import RecipeData from "./Modules/recipe/components/RecipeData/RecipeData";
import MasteraLayout from "./Modules/shared/components/MasteraLayout/MasteraLayout";
import DashBoard from "./Modules/dashBoard/components/DashBoard/DashBoard";
import User from "./Modules/user/component/User/User";
import { ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import ProtectedRout from "./Modules/shared/components/ProtectedRout/ProtectedRout";
import RecipeForm from "./Modules/recipe/components/RecipeForm/RecipeForm";
import VerifyAccount from "./Modules/authentication/components/VerifyAccount/VerifyAccount";
import ChangePassword from "./Modules/authentication/components/ChangePassword/ChangePassword";
import FavoritesRecipe from "./Modules/FavoritesRecipe/FavoritesRecipe";
export default function App() {

  // const items = document.querySelectorAll('.pagination li');

  // items .forEach(item => {
  //   item.addEventListener("click", function() {
  //    items .forEach(a=>{
  //       a.classList.remove("active");
  //     });
  //      item.classList.add("active");
  //    item.style.display = 'block';

  //   });
  // });

  const routers = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Login  />,
        },
        {
          path: "Forget-Password",
          element: <ForgetPass />,
        },
        {
          path: "change-password",
          element: <ChangePassword/>
        },
        {
          path: "Login",
          element: <Login  />,
        },
        {
          path: "Registration",
          element: <Registration />,
        },
        {
          path: "Reset-Password",
          element: <ResetPass />,
        },
        { path: "verify-account", element: <VerifyAccount /> }

      ],
    },
    {
      path: "DashBoard",
      element: (
        <ProtectedRout >
          {" "}
          <MasteraLayout />{" "}
        </ProtectedRout>
      ),
      children: [
        {
          index: true,
          element: <DashBoard  />,
        },
        {
          path: "home",
          element: <DashBoard  />,
        },
        {
          path: "Categories-List",
          element: <CategoriesList />,
        },
        { path: "Recipe-List/Registration", element: <Registration /> },

        {
          path: "Recipe-List/new-recipe",
          element: <RecipeForm />,
        },
        {
          path: "Recipe-List/:recipeId",
          element: <RecipeForm />,
        },
        {
          path: "Categories-Data",
          element: <CategoriesData  />,
        },
        {
          path: "Recipe-List",
          element: <RecipeList />,
        },
        {
          path: "Recipe-Data",
          element: <RecipeData />,
        },
        {
          path: "User",
          element: <User />,
        },
        {
          path: "Fav",
          element: <FavoritesRecipe/>
        }

      ],
    },
  ]);
  return (
    <>
      <ToastContainer />
      <div>
        <RouterProvider router={routers}></RouterProvider>
      </div>
    </>
  );
}
