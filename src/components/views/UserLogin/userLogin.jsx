import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./userLogin.module.css";
import userIcon from "./userLogin.png";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isUserMenuVisible, setUserMenuVisibility] = useState(false);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    // lógica para cerrar sesión
  };

  const handleLogin = () => {
    // lógica para iniciar sesión o redireccionar a la página de inicio de sesión
    if (isLoggedIn) {
      handleLogout();
    } else {
      navigate("/login"); // redirige al usuario a la página de inicio de sesión
    }
  };

  const showUserMenu = () => {
    setUserMenuVisibility(true);
  };

  const hideUserMenu = () => {
    setUserMenuVisibility(false);
  };

  return (
    <div
      className={styles.userLogin}
      onMouseEnter={showUserMenu}
      onMouseLeave={hideUserMenu}
    >
      <img src={userIcon} alt="User Icon" className={styles.UserIcon} />
      <CSSTransition
        in={isUserMenuVisible}
        timeout={350}
        classNames="UserMenuAnimation"
        unmountOnExit
      >
        <div className={styles.UserMenu} ref={userMenuRef}>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Cerrar sesión</button>
          ) : (
            <>
              <button onClick={handleLogin}>Cliente</button>
              <button onClick={() => navigate("/home")}>Administrador</button>
            </>
          )}
        </div>
      </CSSTransition>
    </div>
  );
}
