import React from "react";
import "./CentersCreate.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postCenters } from "../../redux/centers/centers.functions";

const CentersCreate = () => {
  const { register, handleSubmit } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const createCenters = async (data) => {
    // console.log(data.img[0]);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("img", data.img[0]);
    formData.append("ubication", data.ubication);
    formData.append("direction", data.direction);
    formData.append("number", data.number);
    formData.append("schedule", data.schedule);

    dispatch(postCenters(formData, navigate));
    console.log("Info del posts", formData);
  };

  return (
    <div>
      <h2>Nuevo Centro</h2>
      <form onSubmit={handleSubmit(createCenters)}>
        <label>
          Nombre
          <input type="text" name="name" {...register("name")}></input>
        </label>
        <label>
          Descripcion
          <input
            type="text"
            name="description"
            {...register("description")}
          ></input>
        </label>
        <label>
          Foto
          <input type="file" name="img" {...register("img")}></input>
        </label>
        <label>
          Ubicacion
          <input
            type="text"
            name="ubication"
            {...register("ubication")}
          ></input>
        </label>
        <label>
          Direccion
          <input
            type="text"
            name="direction"
            {...register("direction")}
          ></input>
        </label>
        <label>
          Numero
          <input type="number" name="number" {...register("number")}></input>
        </label>
        <label>
          Horario
          <input type="text" name="schedule" {...register("schedule")}></input>
        </label>

        <button>Añadir</button>
      </form>
    </div>
  );
};

export default CentersCreate;
