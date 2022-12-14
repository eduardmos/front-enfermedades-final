import React from "react";
import "./SpecialistsCreate.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postSpecialists } from "../../redux/specialists/specialists.functions";
import CustomButton from "../../components/CustomButton/CustomButton";

const SpecialistsCreate = () => {
  const { register, handleSubmit } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const createSpecialists = async (data) => {
    // console.log(data.img[0]);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("age", data.age);
    formData.append("img", data.img[0]);
    formData.append("specialistType", data.specialistType);
    formData.append("location", data.location);
    formData.append("schedule", data.schedule);

    dispatch(postSpecialists(formData, navigate));
    console.log("Info del posts", formData);
  };

  return (
    <div className="form-specialists-create">
      <h2>Añadir un nuevo especialista</h2>
      <form className="form--box" onSubmit={handleSubmit(createSpecialists)}>
        <label>
          Nombre
          <input type="text" name="name" {...register("name")}></input>
        </label>
        <label>
          Apellido
          <input type="text" name="surname" {...register("surname")}></input>
        </label>
        <label>
          Foto
          <input type="file" name="img" {...register("img")}></input>
        </label>
        <label>
          Edad
          <input type="number" name="age" {...register("age")}></input>
        </label>

        <label>
          Tipo de Especialidad
          <select {...register("specialistType")}>
            <option>Fisioterapeuta</option>
            <option>Auxiliar de Enfermeria</option>
            <option>Terapeuta</option>
            <option>Psicologo Especializado</option>
            <option>Logopeda</option>
          </select>
        </label>
        <label>
          Location
          <input type="text" name="location" {...register("location")}></input>
        </label>
        <label>
          Horario
          <select {...register("schedule")}>
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
          </select>
        </label>
        <CustomButton
          text="Añadir"
          buttonTypeClass="type1 custom"
          buttonHeight="60px"
          buttonWidth="l"
        ></CustomButton>
      </form>
    </div>
  );
};

export default SpecialistsCreate;
