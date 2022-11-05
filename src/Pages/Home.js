import Header from "../Components/Header";
import React from "react";
import Footer from "../Components/Footer";
import RightSidebar from "../Components/RightSidebar";
import LeftSideBar from "../Components/LeftSideBar";

function Home() {
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
        <div style={{ width: "700px", marginLeft: "60px", marginTop: "120px" }}>
          Rebuilt with React React-Bootstrap replaces the Bootstrap JavaScript.
          Each component has been built from scratch as a true React component,
          without unneeded dependencies like jQuery. As one of the oldest React
          libraries, React-Bootstrap has evolved and grown alongside React,
          making it an excellent choice as your UI foundation.
          <br />
          <hr />
          Built with compatibility in mind, we embrace our bootstrap core and
          strive to be compatible with the world's largest UI ecosystem. By
          relying entirely on the Bootstrap stylesheet, React-Bootstrap just
          works with the thousands of Bootstrap themes you already love.
          <br />
          <hr />
          The React component model gives us more control over form and function
          of each component. Each component is implemented with accessibility in
          mind. The result is a set of accessible-by-default components, over
          what is possible from plain Bootstrap.
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
}

export default Home;
