import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider(props) {
  const [loginData, setLoginData] = useState("null");

  let saveloginData = () => {
    let dectoken = localStorage.getItem("token");
    let enctoken = jwtDecode(dectoken);
    setLoginData(enctoken);
    console.log(enctoken);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveloginData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loginData, saveloginData }}>
      {props.children}
    </AuthContext.Provider>
  );
}
