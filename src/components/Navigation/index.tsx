import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(localStorage.getItem("access_token") !== null);
  }, []);

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    setAuthenticated(false);
    navigate("/");
  }

  if (!isAuthenticated) {
    return (
      <>
        <Link className="btn" to="/login">
          Login
        </Link>
        <Link className="btn" to="/cadastro">
          Cadastre-se
        </Link>
      </>
    );
  }

  return (
    <>
      <div className="navigation">
        <Link className="btn" type="button" to="/" onClick={logout}>
          Logout
        </Link>
      </div>
    </>
  );
};

export default Navigation;
