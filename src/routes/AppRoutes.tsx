import { Routes, Route } from "react-router-dom";
import * as Pages from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Login />} />
      <Route path="/grid" element={<Pages.Grid />} />
      <Route path="/color" element={<Pages.Colorpicker />} />
    </Routes>
  );
};

export default AppRoutes;
