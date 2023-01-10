import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundJob from "./components/common/BackgroundJob";
import ShowErrorComponent from "./components/common/ShowErrorComponent";
import ScrollToTop from "./components/common/ScrollToTop";
import Routers from "./routes";
import {
  _changeLanguage,
} from "./store/setting/settingActions";
import "./styles/index.css";
import "./styles/Animation.css";
import ThemeProvider from "./theme";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(_changeLanguage(localStorage.getItem("lang")));
    console.log("Infinity - ver 0.0.1 - Layout")
  }, [dispatch]);

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routers />
      <ShowErrorComponent />
      <BackgroundJob />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
}
