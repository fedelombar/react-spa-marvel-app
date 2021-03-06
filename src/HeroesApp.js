import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";
import Loading from "./components/loading/Loading";

import "animate.css";
import "./app.css";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      logged: false,
    }
  );
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  //keep the name in the navbar
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
      <Loading />
    </AuthContext.Provider>
  );
};
