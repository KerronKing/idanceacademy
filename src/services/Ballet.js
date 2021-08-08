import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.scss";

const Ballet = () => {
  return (
    <>
      <Navbar />

      <div className="class">
        <img src="" alt="" />
        <h3>Ballet</h3>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
        </p>
        <div className="class-grouping">
          <div className="class-description d-flex justify-content-around">
            <span>Beginners' Ballet</span>
            <span>Ages 3 – 7</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque blandit varius elit, nec dignissim massa elementum
            quis. Nam turpis nibh, accumsan non nisi et, volutpat interdum
            neque. Proin mollis lorem eu nisl pulvinar, non porta dolor
            sollicitudin. Donec cursus rutrum tortor eu imperdiet. Sed cursus
            ligula venenatis sollicitudin vestibulum. In maximus massa purus,
            sed venenatis arcu varius tempus
          </p>
        </div>

        <div className="class-grouping">
          <div className="class-description d-flex justify-content-around">
            <span>Youth Ballet</span>
            <span>Ages 8 – 17</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque blandit varius elit, nec dignissim massa elementum
            quis. Nam turpis nibh, accumsan non nisi et, volutpat interdum
            neque. Proin mollis lorem eu nisl pulvinar, non porta dolor
            sollicitudin. Donec cursus rutrum tortor eu imperdiet. Sed cursus
            ligula venenatis sollicitudin vestibulum. In maximus massa purus,
            sed venenatis arcu varius tempus
          </p>
        </div>

        <div className="class-grouping">
          <div className="class-description d-flex justify-content-around">
            <span>Adult Ballet</span>
            <span>Ages 18 and up</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque blandit varius elit, nec dignissim massa elementum
            quis. Nam turpis nibh, accumsan non nisi et, volutpat interdum
            neque. Proin mollis lorem eu nisl pulvinar, non porta dolor
            sollicitudin. Donec cursus rutrum tortor eu imperdiet. Sed cursus
            ligula venenatis sollicitudin vestibulum. In maximus massa purus,
            sed venenatis arcu varius tempus
          </p>
        </div>

        <Link to="/registration">
          <button className="register-btn p-xs-2 p-md-3">Register</button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Ballet;
