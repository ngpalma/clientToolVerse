import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../redux/actions";
import styles from "./User.module.css";
import Swal from "sweetalert2";
import axios from "axios";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersCreated);
  const [editMode, setEditMode] = useState({}); // Estado local para controlar el modo de edición de cada usuario
  const [editedUsers, setEditedUsers] = useState({}); // Estado local para almacenar los usuarios editados

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleEditUser = (id, lastName, firstName, email, phone, role) => {
    // Cambiar el estado para activar el modo de edición del usuario con el id dado
    setEditMode((prev) => ({ ...prev, [id]: {
      id, 
      lastName,
      firstName,
      email,
      phone,
      role
    } }));
  };
  const handleInputChange = (id, field, value) => {
    // Almacena los cambios realizados en los usuarios editados
    setEditedUsers((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handleSaveUser = async (id) => {
    try {
      const editedUser = editMode[id];
      console.log("Editing User ID:", id, editedUser);
      if (editedUser) {
        const { lastName, firstName, email, phone, role } = editedUser;
        console.log("Sending PUT request to update user:", id);
        await axios.put(`/user/${id}`, {
          lastName,
          firstName,
          email,
          phone,
          role,
        });
        setEditedUsers((prev) => ({
          ...prev,
          [id]: false, // Limpia el estado local para este usuario editado
        }));
        //La unica linea que puse para que los inputs se actualizen simultaneamente :)
        await dispatch(getAllUsers());
        console.log("User data after dispatch:", users);


        setEditMode((prevEditData) => {
          const updatedEditData = { ...prevEditData };
          delete updatedEditData[id];
          return updatedEditData;
        });
      }
      return new Swal({
        title: "Success",
        text: "Edicion exitosa",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log("Error updating", error);
    }
  };
  const handleCancel = (id) => {
    setEditMode((prevEditData) => {
      const updatedEditData = { ...prevEditData };
      delete updatedEditData[id];
      return updatedEditData;
    });
  };
  return (
    <div>
      <h2>Usuarios</h2>
      {users.length === 0 ? (
        <p>No se tienen usuarios registrados.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {editMode[user.id] ? (
                    <input
                      type="text"
                      value={editedUsers[user.id]?.firstName || user.firstName}
                      onChange={(e) =>
                        handleInputChange(user.id, "firstName", e.target.value)
                      }
                    />
                  ) : (
                    user.firstName
                  )}
                </td>
                {/* Resto de las celdas */}
                <td>
                  {editMode[user.id] ? (
                    <input
                      type="text"
                      value={editedUsers[user.id]?.lastName || user.lastName}
                      onChange={(e) => {
                        handleInputChange(user.id, "lastName", e.target.value);
                      }}
                    />
                  ) : (
                    user.lastName
                  )}
                </td>
                {/* Resto de las celdas */}
                <td>
                  {editMode[user.id] ? (
                    <input
                      type="text"
                      value={editedUsers[user.id]?.email || user.email}
                      onChange={(e) => {
                        handleInputChange(user.id, "email", e.target.value);
                      }}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                {/* Resto de las celdas */}
                <td>
                  {editMode[user.id] ? (
                    <input
                      type="text"
                      value={editedUsers[user.id]?.phone || user.phone}
                      onChange={(e) => {
                        handleInputChange(user.id, "phone", e.target.value);
                      }}
                    />
                  ) : (
                    user.phone
                  )}
                </td>
                {/* Resto de las celdas */}
                <td>
                  {editMode[user.id] ? (
                    <input
                      type="text"
                      value={editedUsers[user.id]?.role || user.role}
                      onChange={(e) => {
                        handleInputChange(user.id, "role", e.target.value);
                      }}
                    />
                  ) : (
                    user.role
                  )}
                </td>
                <td>
                  {editMode[user.id] ? (
                    <>
                      <button onClick={() => handleSaveUser(user.id)}>
                        Guardar
                      </button>
                      <button onClick={() => handleCancel(user.id)}>
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <button onClick={() => handleEditUser(user.id)}>
                      Editar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
