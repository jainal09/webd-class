import React, { useState } from "react";
import Card from "../../componets/Card";
import Navbar from "../../componets/Navbar";
import "./job.css";

const Job = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      description: "Build and maintain web applications",
    },
    {
      id: 2,
      title: "Junior Software Engineer",
      description: "Build and maintain web applications",
    },
    {
      id: 3,
      title: "Senior Cloud Engineer",
      description: "Build and maintain cloud applications",
    },
    {
      id: 4,
      title: "Junior Cloud Engineer",
      description: "Build and maintain cloud applications",
    },
  

  ];

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="jobs_container">
        {jobs.map((job) => (
          <Card
            key={job.id}
            header={job.title}
            cardContent={job.description}
            isShowButton
            onApplyClick={() => handleApplyClick()}
          />
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          <p>Thanks for applying!</p>
        </div>
      )}
    </div>
  );
};

export default Job;
