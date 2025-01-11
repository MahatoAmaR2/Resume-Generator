import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ContactUs from "./pages/Contactus";
import Dashboard from "./pages/Dashboard";

// roters
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/auth/register" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
