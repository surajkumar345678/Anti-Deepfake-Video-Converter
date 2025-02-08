import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { VideoProvider } from "./VideoContext";
import "./App.css";

const App = () => {
  return (
    <VideoProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </VideoProvider>
  );
};

export default App;
