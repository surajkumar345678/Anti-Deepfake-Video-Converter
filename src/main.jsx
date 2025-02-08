import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Convert from "./components/Convert";
import Download from "./components/Download";
import { VideoProvider } from "./VideoContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      { path: "/contact", element: <Contact /> },
      { path: "/convert", element: <Convert /> },
      { path: "/download", element: <Download /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <VideoProvider>
    <RouterProvider router={router} />
  </VideoProvider>
);
