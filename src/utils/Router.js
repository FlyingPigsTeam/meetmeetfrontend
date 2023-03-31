import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default Router;
