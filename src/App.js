import React from "react";
import "./App.css";
// import mainImage from "./img/studygirl.jpg";
import NavBar from "./components/NavBar";
import Home from "./components/Homepage";
import Features from "./components/Features";
import Footer from "./components/Footer";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

function App() {
  const handleAdd = (user) => {
    axios.post("api-user/create/", user);
  };

  return (
    <section
      id="main-section"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dvpw0zdml/image/upload/v1631239689/clevino/landing%20page/studygirl_oh4fry.jpg')",
      }}
    >
      <NavBar></NavBar>
      <Home onAdd={handleAdd}></Home>
      <Features></Features>
      <Footer></Footer>
    </section>
  );
}

export default App;
