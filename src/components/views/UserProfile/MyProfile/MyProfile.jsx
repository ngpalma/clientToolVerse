import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MyProfileForm from "./MyProfileForm";
import { validateForm } from "./Validation";
import { getUserById, updateUser } from "../../../../redux/actions";

const MyProfile = ({ user }) => {
  const id = user.id;
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");

  const [formProfile, setFormProfile] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
  });

  useEffect(() => {
    setFormProfile({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    });
  }, [user, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm(
      formProfile.firstName,
      formProfile.lastName,
      formProfile.email,
      formProfile.phone
    );
    setError(validationError);
    if (!validationError) {
      dispatch(updateUser(id, formProfile))
        .then(() => {
          dispatch(getUserById(id));
          console.log("Registro exitoso");
          setError("");
          alert("¡Cambio exitoso!");
          setActive(false);
        })
        .catch((error) => {
          console.error("Error en el registro", error);
          setError("Error en el registro. Inténtalo nuevamente.");
        });
    }
  };

  const handleChange = (e) => {
    setFormProfile({ ...formProfile, [e.target.name]: e.target.value });
  };

  const handleModify = () => {
    setActive(true);
  };

  return (
    <div>
      {!active ? (
        <div>
          <h2>Nombre: {user.firstName}</h2>
          <h2>Apellido: {user.lastName}</h2>
          <h2>Teléfono: {user.phone}</h2>
          <h2>Correo: {user.email}</h2>
          <button onClick={handleModify}>Modificar</button>
        </div>
      ) : (
        <MyProfileForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formProfile={formProfile}
          error={error}
        />
      )}
    </div>
  );
};

export default MyProfile;
