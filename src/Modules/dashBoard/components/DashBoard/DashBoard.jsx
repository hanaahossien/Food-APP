import React, { useContext } from "react";
import Header from "../../../shared/components/Header/Header";
import { AuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

export default function DashBoard() {
  let { loginData } = useContext(AuthContext);
  return (
    <>
      {/* {loginData.userGroup == "SystemUser" ? (
                "user"
              ) : (
                "admin"
              )} */}

      <div className=" row align-items-center ">
        <div className="col-md-12">
          <Header
            title={"welcome"}
            item={
              loginData.userGroup == "SystemUser"
                ? `"User"${loginData?.userName}`
                : `"Admin" ${loginData?.userName}`
            }
            desc={
              "You can now add your items that any user can order it from the Application and you can edit"
            }
          />
        </div>
      </div>
      <div className="row bg-light_green align-items-center shadow rounded-3 g-0">
        <div className="col-md-8  p-5 ">
          <h3 className="my-4">Fill the Recipes!</h3>
          <p>
            you can now fill the meals easily using the table and form ,<br />{" "}
            click here and sill it with the table !
          </p>
        </div>
        <div className="col-md-4  p-4 text-end">
          <Link to={"/DashBoard/Recipe-List"} className="btn  px-5 btn-lg btn-success">
            All Recipes
          </Link>
        </div>
      </div>
    </>
  );
}
