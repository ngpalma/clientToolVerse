import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./userLogin.module.css";
import userIcon from "./userLogin.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cerrarSesion } from "../../../redux/actions";

export default function UserLogin() {
  const [isUserMenuVisible, setUserMenuVisibility] = useState(false);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  const handleMenuItemClick = (destination) => {
    setUserMenuVisibility(false);
    navigate(destination);
  };

  const showUserMenu = () => {
    setUserMenuVisibility(true);
  };

  const hideUserMenu = () => {
    setUserMenuVisibility(false);
  };

  const handleLogout = () => {
    dispatch(cerrarSesion());
    navigate("/login");
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
          {isAuthenticated ? ( 
            <button onClick={handleLogout}>Cerrar Sesión</button>
          ) : (
           
            <>
              <button onClick={() => handleMenuItemClick("/login")}>Cliente</button>
              <button onClick={() => handleMenuItemClick("/home")}>Administrador</button>
            </>
          )}
        </div>
      </CSSTransition>
    </div>
  );
}
