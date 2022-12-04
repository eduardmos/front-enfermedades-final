// import React, { useEffect } from "react";
import "./DiseasesPut.scss";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getByIdDiseases,
  putDiseases,
} from "../../redux/diseases/diseases.functions";

const DiseasesPut = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByIdDiseases(id));
    // console.log("Datos recogidos por id", specialists);
  }, []);

  const { disease } = useSelector((state) => state.diseases);
  // console.log(disease);

  const editDiseases = async (data) => {
    // console.log(data.img[0]);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("img", data.img[0]);
    formData.append("symptoms", data.symptoms);
    formData.append("treatment", data.treatment);
    formData.append("mortality", data.mortality);

    dispatch(putDiseases(formData, navigate, id));
    dispatch(getByIdDiseases(id));
    // console.log("Info del posts", formData);
  };

  return (
    <div className="form-specialists-put">
      <h2>Edita la enfermedad</h2>
      {disease && (
        <form className="form--box" onSubmit={handleSubmit(editDiseases)}>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              {...register("name")}
              defaultValue={disease.name}
            ></input>
          </label>
          <label>
            Description
            <input
              type="text"
              name="description"
              {...register("description")}
              defaultValue={disease.description}
            ></input>
          </label>
          <label>
            Foto
            <input type="file" name="img" {...register("img")}></input>
          </label>
          <label>
            Sintomas
            <input
              type="text"
              name="symptoms"
              {...register("symptoms")}
              defaultValue={disease.symptoms}
            ></input>
          </label>
          <label>
            Tratamiento
            <input
              type="text"
              name="treatment"
              {...register("treatment")}
              defaultValue={disease.treatment}
            ></input>
          </label>
          <label>
            Mortalidad
            <input
              type="text"
              name="mortality"
              {...register("mortality")}
              defaultValue={disease.mortality}
            ></input>
          </label>

          <button>Modificar</button>
        </form>
      )}
    </div>
  );
};

export default DiseasesPut;
