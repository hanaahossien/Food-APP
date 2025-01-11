import React, { useState, useContext } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import navlogo from "../../../../assets/navlogo.png";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
export default function SideBar() {
  let [isCollapsed, setCollapsed] = useState(true);

  const { loginData } = useContext(AuthContext);
  const navigate = useNavigate();
  let chage = () => {
    console.log(isCollapsed);
    setCollapsed(!isCollapsed);
  };
  const logOut = () => {
    try {
      localStorage.clear();
      navigate('/login');
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="container-sidebar">
      <Sidebar collapsed={isCollapsed}>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "red" : "#ffffff",
                  backgroundColor: active ? " #1F263E" : " #1F263E",
                };
            },
          }}
        >
          <MenuItem
            icon={
              <img
                src={navlogo}
                onClick={() => {
                  chage();
                }}
                className="navlogo"
                alt="foodRecipe"
              />
            }
            component={<NavLink to="/DashBoard" />}
            className="m-3 py-3"
          ></MenuItem>

          <MenuItem
            icon={<i className="fa-solid fa-house-chimney"></i>}
            component={<NavLink to="/DashBoard/Home" />}
          >
            Home
          </MenuItem>

          {loginData.userGroup == "SystemUser" ? (
            ""
          ) : (
            <MenuItem
              icon={<i className="fa-regular fa-user"></i>}
              component={<NavLink to="User" />}
            >
              User
            </MenuItem>
          )}


          <MenuItem
            icon={<i className="fa-solid fa-cubes-stacked"></i>}
            component={<NavLink to="Recipe-List" />}
          >
            Recipe
          </MenuItem>

          {loginData.userGroup == "SystemUser" ? (
            <MenuItem
              icon={<i className="fa-regular fa-heart"></i>}
              component={<NavLink to="fav" />}
            >
              favourite
            </MenuItem>
          ) : (
            ""
          )}

          {loginData.userGroup == "SystemUser" ? (
            ""
          ) : (
            <MenuItem
              icon={<i className="fa-solid fa-list"></i>}
              component={<NavLink to="Categories-List" />}
            >
              categories
            </MenuItem>
          )}

          <MenuItem
            icon={<i className="fa-solid fa-unlock-keyhole"></i>}
            component={<NavLink to="/change-password" />}
          >
            Change password
          </MenuItem>
          <MenuItem
            icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>}
            component={<NavLink to="/login" />}
            onClick={ logOut}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      ;
    </div>
  );
}
