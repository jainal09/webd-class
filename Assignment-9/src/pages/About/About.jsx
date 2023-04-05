import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import Footer from "../../componets/Footer";
import "./about.css";

const About = () => {
  return (
    <div className="container">
      <Navbar />
      <Card
        header={"About"}
        cardContent={
          "Indeed is a job search portal that helps you find better jobs. We are growing fast and we are looking for talented people to join our team."
        }
      />
    </div>
  );
};

export default About;
