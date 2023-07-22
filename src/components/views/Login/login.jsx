import React, { useState } from "react";
import styles from "../Login/login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Por favor, completa todos los campos.");
    } else {
      setError("");
      //lógica de inicio de sesión
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Inicia sesión</div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <div className={styles["user-details"]}>
            <div className={styles["input-box"]}>
              <span className={styles.details}>Nombre de Usuario</span>
              <input
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                value={username}
                onChange={handleUsernameChange}
            
              />
            </div>
            <div className={styles["input-box"]}>
              <span className={styles.details}>Contraseña</span>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={handlePasswordChange}
                
              />
            </div>
          </div>

          <div className={styles.button}>
            <input type="submit" value="Inicia sesión" />
          </div>
        </form>

        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
}

export default Login;