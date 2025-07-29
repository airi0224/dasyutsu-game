import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TitleScreen from "./components/TitleScreen.jsx";
import Start from "./Rooms/Start/index.jsx";
import Room1 from "./Rooms/Room1/index.jsx";
import Room2 from "./Rooms/Room2/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TitleScreen />,
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/room1",
    element: <Room1 />,
  },
  {
    path: "/room2",
    element: <Room2 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);