import React, { useState } from "react";
import styles from "../Form/form.module.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/actions";
import { validateForm } from "./validation";

function Form() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    // confirmPassword: "",
    role: "client",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationError = validateForm(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phone,
      formData.password,
      // formData.confirmPassword
    );
    setError(validationError);

    if (!validationError) {
      dispatch(createUser(formData))
        .then(() => {
          console.log("Registro exitoso");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            // confirmPassword: "",
            role: "client",
          });
          setError("");
          alert("¡Registro exitoso!");
        })
        .catch(() => {
          console.log("Error en el registro");
          setError("Error en el registro. Inténtalo nuevamente.");
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Registro</div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <div className={styles["user-details"]}>
            <div className={styles["input-box"]}>
              <span className={styles.details}>Nombre</span>
              <input
                type="text"
                name="firstName"
                placeholder="Ingresa tu nombre"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={styles["input-box"]}>
              <span className={styles.details}>Apellido</span>
              <input
                type="text"
                name="lastName"
                placeholder="Ingresa tu apellido"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className={styles["input-box"]}>
              <span className={styles.details}>Email</span>
              <input
                type="text"
                name="email"
                placeholder="Ingresa tu email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles["input-box"]}>
              <span className={styles.details}>Número de Teléfono</span>
              <input
                type="text"
                name="phone"
                placeholder="Ingresa tu número de teléfono"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles["input-box"]}>
              <span className={styles.details}>Contraseña</span>
              <input
                type="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {/* <div className={styles["input-box"]}>
              <span className={styles.details}>Confirmar Contraseña</span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirma tu contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div> */}
            <div className={styles["input-box"]}>
              <span className={styles.details}>Rol</span>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="admin">Admin</option>
                <option value="client">Cliente</option>
              </select>
            </div>
          </div>

          <div className={styles.button}>
            <input type="submit" value="Registrate" />
          </div>
        </form>

        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
}

export default Form;
