import React, { useContext, useState, useCallback } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./login.css";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [animation, setAnimation] = useState("animate__zoomInDown");

  //Set username or password depending on the type passed
  const onInputChange = useCallback(
    (val, type) => {
      if (type === "username") setUsername(val);
      else setPassword(val);
    },
    [setUsername, setPassword]
  );

  //On form submit
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      //TODO implement an API call
      if (username === "admin" && password === "admin") {
        dispatch({
          type: types.login,
          payload: {
            name: "Federico",
          },
        });
      } else {
        //If login credentials are wrong add animation
        setAnimation("");
        //Timeout needed to refresh the same animation
        setTimeout(() => {
          setAnimation("animate__tada");
        }, 100);
      }
    },
    [username, password, dispatch, setAnimation]
  );

  return (
    <div className="vh-100 vw-100 d-flex align-items-center">
      <div className={`p-2 animate__animated ${animation}`} id="loginCont">
        <form
          className="p-4 mx-auto rounded"
          id="loginPanel"
          onSubmit={(e) => onSubmit(e)}
        >
          <h2 className="marvel-red-text title">Login</h2>
          <label>*Username</label>
          <input
            required
            className="w-100 mb-2"
            type="text"
            minLength={3}
            maxLength={20}
            value={username}
            onChange={(e) => onInputChange(e.target.value, "username")}
          />

          <label>*Password</label>
          <input
            required
            className="w-100 mb-2"
            type="password"
            minLength={5}
            maxLength={20}
            value={password}
            onChange={(e) => onInputChange(e.target.value, "password")}
          />
          <div className="d-flex justify-content-end">
            <input
              type="submit"
              className="btn btn-light border border-secondary"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
