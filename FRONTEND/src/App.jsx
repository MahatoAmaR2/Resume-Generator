import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Header from "./components/header/Header";

// roters
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Header />} />
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
