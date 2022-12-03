// import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getByIdCenters,
  putCenters,
} from "../../redux/centers/centers.functions";

const CentersPut = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { center } = useSelector((state) => state.centers);
  console.log(center);

  // useEffect(() => {
  //   dispatch(putSpecialists(id));
  //   // console.log("Datos recogidos por id", specialists);
  // }, []);

  const editCenters = async (data) => {
    // console.log(data.img[0]);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("img", data.img[0]);
    formData.append("ubication", data.ubication);
    formData.append("direction", data.direction);
    formData.append("number", data.number);
    formData.append("schedule", data.schedule);

    dispatch(putCenters(formData, navigate, id));
    dispatch(getByIdCenters(id));
    // console.log("Info del posts", formData);
  };

  return (
    <div>
      <h2>Edita el Centro</h2>
      {center && (
        <form onSubmit={handleSubmit(editCenters)}>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              {...register("name")}
              defaultValue={center.name}
            ></input>
          </label>
          <label>
            Description
            <input
              type="text"
              name="description"
              {...register("description")}
              defaultValue={center.description}
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
              defaultValue={center.ubication}
            ></input>
          </label>
          <label>
            Direccion
            <input
              type="text"
              name="direction"
              {...register("direction")}
              defaultValue={center.direction}
            ></input>
          </label>
          <label>
            Number
            <input
              type="number"
              name="number"
              {...register("number")}
              defaultValue={center.number}
            ></input>
          </label>
          <label>
            Horario
            <input
              type="text"
              name="schedule"
              {...register("schedule")}
              defaultValue={center.schedule}
            ></input>
          </label>

          <button>Modificar</button>
        </form>
      )}
    </div>
  );
};

export default CentersPut;
