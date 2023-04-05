import React from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Card
        header={"Indeed Job Board"}
        cardContent={
          "Find Jobs, Employment & Career Opportunities. Search for full time or part time employment opportunities on Indeed."
        }
      />
    </div>
  );
};

export default Home;
