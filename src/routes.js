import { BrowserRouter, Routes, Route } from "react-router-dom";
import constants from "./constants";
import Home from './containers/Home'


const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={constants.routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
