import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const Homepage = () => (
  <>
    <div className="homepage-first">
      <Navbar />
      <div>
        <div className="homepage-first-heading-text offset-1 col-4">
          <h3>iDance Academy</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/services">
            <button className="learn-more">Learn more</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="w-25 container mt-5">
        <h2 className="border-bottom border-danger pb-5 my-3">JOIN US</h2>
      </div>

      <div className="row border border-info justify-content-around mt-5">
        <div className="col-sm-12 col-md-6 border border-primary test"></div>
        <div className="col-sm-12 col-md-4 offset-md-1 border border-danger test aligner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
        </div>
      </div>

      <div className="row border border-info justify-content-around mt-5">
        <div className="col-sm-12 col-md-4 offset-md-1 border border-danger test aligner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
        </div>
        <div className="col-sm-12 col-md-6 border border-primary test"></div>
      </div>

      <div className="row border border-info justify-content-around mt-5">
        <div className="col-sm-12 col-md-6 border border-primary test"></div>
        <div className="col-sm-12 col-md-4 offset-md-1 border border-danger test aligner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
        </div>
      </div>
    </div>
  </>
);

export default Homepage;
