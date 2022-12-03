// import React, { useEffect } from "react";
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
  const { disease } = useSelector((state) => state.diseases);
  console.log(disease);
  // useEffect(() => {
  //   dispatch(putSpecialists(id));
  //   // console.log("Datos recogidos por id", specialists);
  // }, []);

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
    <div>
      <h2>Edita la enfermdad</h2>
      {disease && (
        <form onSubmit={handleSubmit(editDiseases)}>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              {...register("name")}
              value={disease.name}
            ></input>
          </label>
          <label>
            Description
            <input
              type="text"
              name="description"
              {...register("description")}
              value={disease.description}
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
              name="symptomas"
              {...register("symptoms")}
              value={disease.age}
            ></input>
          </label>
          <label>
            Tratamiento
            <input
              type="text"
              name="treatment"
              {...register("treatment")}
              value={disease.treatment}
            ></input>
          </label>
          <label>
            Mortalidad
            <input
              type="text"
              name="mortality"
              {...register("mortality")}
              value={disease.mortality}
            ></input>
          </label>

          <button>Añadir</button>
        </form>
      )}
    </div>
  );
};

export default DiseasesPut;
