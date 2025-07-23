import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import MovieDetails from "../components/MovieDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/movie/:id" element={<MovieDetails/>} />
    </Routes>
  );
};

export default AppRoutes;