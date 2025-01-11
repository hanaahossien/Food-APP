import React, { useEffect, useState } from "react";
import Header from "../shared/components/Header/Header";
import fav from "../../assets/fav.png";
import {
  axiosInstance,
  baseURL,
  imgURL,
  recipi,
  userRecipe,
} from "../../services/apiUrls/apiUrl";
import { toast } from "react-toastify";
export default function FavoritesRecipe() {
  const [fav, setFav] = useState([]);

  const getFavRecipe = async () => {
    try {
      const res = await axiosInstance.get(userRecipe.getFav);
      console.log("allfav", res.data.data);

      setFav(res.data.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const removeFromFav = async (id) => {
    try {
      const res = await axiosInstance.delete(userRecipe.deleteFav(`${id}`));
      getFavRecipe();
      toast.error("deleted successfully");
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    getFavRecipe();
  }, []);

  return (
    <>
      <Header
        title={"Favorite  "}
        item={"Recipe"}
        desc={
          "You can now add your items that any user can order it from the Application and you can edit"
        }
      />
      <div className="row">
        {fav
          ? fav.map((favItem) => (
              <div key={favItem.id} className="col-lg-4 col-md-6">
                <div className="shadow mb-4 rounded-3">
                  <div className="position-relative">
                    <i
                      role="button"
                      className="fa-solid fa-heart-circle-minus position-absolute text-danger bg-success-subtle bg-opacity-25 p-2 fs-3 rounded-3 top-0 end-0 m-3 "
                      onClick={() => {
                        removeFromFav(favItem.id);
                      }}
                    ></i>
                    <img
                      src={`${imgURL}` + favItem.recipe.imagePath}
                      style={{ height: "220px", width: "100%" }}
                      alt="fav"
                      className="rounded-2 img-fluid"
                    />
                  </div>{" "}
                  <div className="p-3">
                    <h4>{favItem.recipe.name}</h4>
                    <p>{favItem.recipe.description}</p>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
}
