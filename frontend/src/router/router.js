import { Routes, Route } from "react-router-dom";
import { Home, Result, About } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
