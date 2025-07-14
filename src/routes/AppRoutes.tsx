import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import FormPage from "../pages/Form";
import { PrivateRoute } from "./PrivateRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" 
      element={
                  <Dashboard />
          }
          />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
}
