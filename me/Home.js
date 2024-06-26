import React from "react";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="info">
        <h2>
          hii ! i'm <span>shivam sharma </span>
        </h2>

        <span>a frontend developer</span>
        <p>
          "Utilizing animation to simplify and guide interactions, I craft
          intuitive experiences with React, JavaScript, and Tailwind CSS,
          enhancing every element with purposeful motion, not just for flair,
          but for clarity."
        </p>
      </div>
      <div
        className="img"
        style={{ width: "50%", height: "90vh", background: "red" }}
      >
        hello img
      </div>
    </div>
  );
};

export default Home;
