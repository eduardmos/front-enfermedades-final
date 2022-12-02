// import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getByIdSpecialists,
  putSpecialists,
} from "../../redux/specialists/specialists.functions";

const SpecialistsPut = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { specialist } = useSelector((state) => state.specialists);
  console.log(specialist);
  // useEffect(() => {
  //   dispatch(putSpecialists(id));
  //   // console.log("Datos recogidos por id", specialists);
  // }, []);

  const editSpecialists = async (data) => {
    // console.log(data.img[0]);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("age", data.age);
    formData.append("img", data.img[0]);
    formData.append("specialistType", data.specialistType);
    formData.append("location", data.location);
    formData.append("schedule", data.schedule);

    dispatch(putSpecialists(formData, navigate, id));
    dispatch(getByIdSpecialists(id));
    // console.log("Info del posts", formData);
  };

  return (
    <div>
      <h2>Edita el Especialista</h2>
      {specialist && (
        <form onSubmit={handleSubmit(editSpecialists)}>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              {...register("name")}
              value={specialist.name}
            ></input>
          </label>
          <label>
            Apellido
            <input
              type="text"
              name="surname"
              {...register("surname")}
              value={specialist.surname}
            ></input>
          </label>
          <label>
            Foto
            <input type="file" name="img" {...register("img")}></input>
          </label>
          <label>
            Edad
            <input
              type="text"
              name="age"
              {...register("age")}
              value={specialist.age}
            ></input>
          </label>

          <label>
            Tipo de Especialidad
            <select
              {...register("specialistType")}
              value={specialist.specialistType}
            >
              <option>Fisioterapeuta</option>
              <option>Auxiliar de Enfermeria</option>
              <option>Terapeuta</option>
              <option>Psicologo Especializado</option>
              <option>Logopeda</option>
            </select>
          </label>
          <label>
            Location
            <input
              type="text"
              name="location"
              {...register("location")}
              value={specialist.location}
            ></input>
          </label>
          <label>
            Horario
            <select {...register("schedule")} value={specialist.schedule}>
              <option>Mañana</option>
              <option>Tarde</option>
              <option>Noche</option>
            </select>
          </label>
          <button>Añadir</button>
        </form>
      )}
    </div>
  );
};

export default SpecialistsPut;
