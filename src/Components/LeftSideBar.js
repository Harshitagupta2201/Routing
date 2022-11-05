import React from "react";

const LeftSideBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-Around",
        height: "580px",
        width: "150px",
        alignItems: "center",
        color: "white",
        backgroundColor: "#1F51FF",
        border: "2px solid black",
      }}
    >
      <div>Introduction</div>
      <div>Layout</div>
      <div>Format</div>
      <div>Component</div>
      <div>Utility</div>
    </div>
  );
};

export default LeftSideBar;
