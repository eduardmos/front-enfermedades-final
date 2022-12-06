// import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getByIdSpecialists,
  putSpecialists,
} from "../../redux/specialists/specialists.functions";
import CustomButton from "../../components/CustomButton/CustomButton";

const SpecialistsPut = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { specialist } = useSelector((state) => state.specialists);

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
    <div className="form-specialists-put">
      <h2>Edita el Especialista</h2>
      {specialist && (
        <form className="form--box" onSubmit={handleSubmit(editSpecialists)}>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              {...register("name")}
              defaultValue={specialist.name}
            ></input>
          </label>
          <label>
            Apellido
            <input
              type="text"
              name="surname"
              {...register("surname")}
              defaultValue={specialist.surname}
            ></input>
          </label>
          <label>
            Foto
            <input type="file" name="img" {...register("img")}></input>
          </label>
          <label>
            Edad
            <input
              type="number"
              name="age"
              {...register("age")}
              defaultValue={specialist.age}
            ></input>
          </label>

          <label>
            Tipo de Especialidad
            <select
              {...register("specialistType")}
              defaultValue={specialist.specialistType}
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
              defaultValue={specialist.location}
            ></input>
          </label>
          <label>
            Horario
            <select
              {...register("schedule")}
              defaultValue={specialist.schedule}
            >
              <option>Mañana</option>
              <option>Tarde</option>
              <option>Noche</option>
            </select>
          </label>
          <CustomButton
            text="Modificar"
            buttonTypeClass="type1 custom"
            buttonHeight="60px"
            buttonWidth="l"
          ></CustomButton>
        </form>
      )}
    </div>
  );
};

export default SpecialistsPut;
