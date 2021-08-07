import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.scss";

const BeginnerBallet = () => {
  return (
    <>
      <Navbar />

      <div className="class">
        <img src="" alt="" />
        <h1>Beginners' Ballet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
        </p>
      </div>

      <Footer />
    </>
  );
};

export default BeginnerBallet;