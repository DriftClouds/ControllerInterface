import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import TabContainerType6 from "./pages/TabContainerType6";
import FrameMain from "./pages/FrameMain";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-3":
        title = "";
        metaDescription = "";
        break;
      case "/frame-4":
        title = "";
        metaDescription = "";
        break;
      case "/frame-5":
        title = "";
        metaDescription = "";
        break;
      case "/tab-containertype6":
        title = "";
        metaDescription = "";
        break;
      case "/frame-main":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<FrameMain />} />
        <Route path="/frame-2" element={<Frame1 />} />
        <Route path="/frame-3" element={<Frame2 />} />
        <Route path="/frame-4" element={<Frame3 />} />
        <Route path="/frame-5" element={<Frame4 />} />
        <Route path="/tab-containertype6" element={<TabContainerType6 />} />
      </Routes>
    </React.StrictMode>
  );
}
export default App;

