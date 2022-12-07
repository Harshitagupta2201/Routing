import Header from "../Components/Header";
import React from "react";
import Footer from "../Components/Footer";
import RightSidebar from "../Components/RightSidebar";
import LeftSideBar from "../Components/LeftSideBar";

const About = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <LeftSideBar />
        </div>
        <div style={{ width: "700px", marginLeft: "100px", marginTop: "60px" }}>
          <h1>About</h1>
          <br />
          Get to know more about the team maintaining React Bootstrap. Learn a
          little history of how, why and when the project started and how you
          can be a part of it.
          <img src="ecom.jpg" alt={"ecom"} />
          <br />
          <br />
          <hr />
          <h1>Team</h1>React Bootstrap is maintained by a team of developers on
          Github. We have a growing team and if you are interested in
          re-building the most popular front-end framework with React we would
          love to hear from you.
        </div>
        <div>
          <RightSidebar />
        </div>
      </div>
      <div style={{ marginTop: "0%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
