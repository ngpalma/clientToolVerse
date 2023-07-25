import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { errorLogin } = useSelector(state => state.errorLogin)
  const { isAuthenticated } = useSelector(state => state.isAuthenticated)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(inputs))
  };
  useEffect(() => {
    isAuthenticated && navigate('/userprofile')
  }, [isAuthenticated, navigate])

  console.log(isAuthenticated)

  return (
    <div className={styles.container}>
      <div className={styles.title}>Inicia sesión</div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <div className={styles["user-details"]}>
            <div className={styles["input-box"]}>
              <span className={styles.details}>Nombre de Usuario (Email) </span>
              <input
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                name="email"
                value={inputs.email}
                onChange={handleInput}
              />
            </div>
            <div className={styles["input-box"]}>
              <span className={styles.details}>Contraseña</span>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                value={inputs.password}
                onChange={handleInput}
              />
            </div>
          </div>

          <div className={styles.button}>
            <input type="submit" value="Inicia sesión" />
          </div>
        </form>
        {errorLogin && <div className={styles.error}>{errorLogin}</div>}
      </div>
    </div>
  );
}

export default Login;