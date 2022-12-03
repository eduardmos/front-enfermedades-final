import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Diseases from "./pages/Diseases/Diseases";
import Centers from "./pages/Centers/Centers";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Specialists from "./pages/Specialists/Specialists";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkSession } from "./redux/auth/auth.actions";
import SpecialistsCreate from "./pages/SpecialistsCreate/SpecialistsCreate";
import SpecialistsDetails from "./pages/SpecialistsDetails/SpecialistsDetails";
import SpecialistsPut from "./pages/SpecialistsPut/SpecialistsPut";
import DiseasesCreate from "./pages/DiseasesCreate/DiseasesCreate";
import DiseasesPut from "./pages/DiseasesPut/DiseasesPut";
import CentersDetails from "./pages/CentersDetail/CentersDetail";
import CentersPut from "./pages/CentersPut/CentersPut";
import CentersCreate from "./pages/CentersCreate/CentersCreate";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    token && dispatch(checkSession(token, navigate));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="diseases" element={<Diseases />} />

        <Route path="diseasesCreate" element={<DiseasesCreate />} />
        <Route path="diseasesPut/edit/:id" element={<DiseasesPut />} />
        <Route path="centers" element={<Centers />} />
        <Route path="centers/:id" element={<CentersDetails />} />
        <Route path="centersCreate" element={<CentersCreate />} />
        <Route path="centersPut/edit/:id" element={<CentersPut />} />
        <Route path="specialists" element={<Specialists />} />
        <Route path="specialists/:id" element={<SpecialistsDetails />} />
        <Route path="specialistsCreate" element={<SpecialistsCreate />} />
        <Route path="specialistsPut/edit/:id" element={<SpecialistsPut />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
