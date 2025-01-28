import "./App.css";
import "./assets/css/style.css";
import "./assets/css/media_query.css";
import "./assets/css/swap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import LoaderGif from "./assets/images/loader.gif";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <div className="site_contain">
        <div className="fix-bg">
          <div className="Ellipse1"></div>
          <div className="Ellipse2"></div>

          <div className="container">
            {/* <!-- ====================================== Preloader ===================================== --> */}
            {loading && (
              <div className="page-loader">
                <img src={LoaderGif} alt="loader" />
              </div>
            )}
            {/* <!-- ====================================== Preloader End ===================================== --> */}
            {!loading && <Home />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
