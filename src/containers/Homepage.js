import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Homepage.scss";
import Footer from "../components/Footer";

const Homepage = () => (
  <>
    <div className="homepage-first">
      {/* Navbar */}

      <Navbar />

      {/* Opening Section */}

      <div>
        <div className="homepage-first-heading-text offset-1 col-5">
          <h3>iDance Academy</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/services">
            <button className="learn-more btn-outline-dark p-3">Learn more</button>
          </Link>
        </div>
      </div>
    </div>

    {/* Short Company Info Section */}

    <div className="homepage-second">
      <div>
        <img
          src="iDance Logo.png"
          alt="iDance Academy logo"
          height="300"
          width="300"
        />
      </div>
      <div className="w-50 container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        blandit varius elit, nec dignissim massa elementum quis. Nam turpis
        nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis lorem
        eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus rutrum
        tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
        vestibulum. In maximus massa purus, sed venenatis arcu varius
        tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque blandit varius elit, nec dignissim massa elementum quis.
        Nam turpis nibh, accumsan non nisi et, volutpat interdum neque. Proin
        mollis lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec
        cursus rutrum tortor eu imperdiet. Sed cursus ligula venenatis
        sollicitudin vestibulum. In maximus massa purus, sed venenatis arcu
        varius tempus
      </div>
    </div>

    {/* Join Us */}

    <div className="container">
      <div className="w-25 container mt-5">
        <h2 className="border-bottom pb-5 my-3">JOIN US</h2>
      </div>

      <div className="row justify-content-around mt-5">
        <div className="col-sm-12 col-md-6 join-us img-1"></div>
        <div className="col-sm-12 col-md-4 offset-md-1 join-us aligner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
        </div>
      </div>

      <div className="row justify-content-around mt-5">
        <div className="col-sm-12 col-md-4 offset-md-1 join-us aligner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
        </div>
        <div className="col-sm-12 col-md-6 join-us img-2"></div>
      </div>

      <div className="row justify-content-around mt-5">
        <div className="col-sm-12 col-md-6 border join-us img-3"></div>
        <div className="col-sm-12 col-md-4 offset-md-1 join-us aligner">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          blandit varius elit, nec dignissim massa elementum quis. Nam turpis
          nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis
          lorem eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus
          rutrum tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
          vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
        </div>
      </div>
    </div>

    {/* Classes Section */}

    <div className="container pb-5">
      <div className="w-25 container mt-5">
        <h2 className="border-bottom border-danger pb-5 my-3">OUR CLASSES</h2>
      </div>
      <div className="row border border-info justify-content-around mt-5">
        <div className="col-sm-12 col-md-3 border border-danger p-0">
          <div className="class-first"></div>
          <div className="class-second"></div>
        </div>
        <div className="col-sm-12 col-md-3 offset-1 border border-danger p-0">
          <div className="class-first"></div>
          <div className="class-second"></div>
        </div>
        <div className="col-sm-12 col-md-3 offset-1 border border-danger p-0">
          <div className="class-first"></div>
          <div className="class-second"></div>
        </div>
      </div>
    </div>

    {/* Call to Sign Up Section */}

    <div className="container pb-5">
      <div className="w-25 container mt-5">
        <h2 className="border-bottom border-danger pb-5 my-3">
          SIGN UP TODAY!
        </h2>
      </div>
      <div className="p-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        blandit varius elit, nec dignissim massa elementum quis. Nam turpis
        nibh, accumsan non nisi et, volutpat interdum neque. Proin mollis lorem
        eu nisl pulvinar, non porta dolor sollicitudin. Donec cursus rutrum
        tortor eu imperdiet. Sed cursus ligula venenatis sollicitudin
        vestibulum. In maximus massa purus, sed venenatis arcu varius tempus
      </div>
      <div className="p-5">
        <button className="btn btn-primary p-3">Register now!</button>
      </div>
    </div>
    <Footer />
  </>
);

export default Homepage;
