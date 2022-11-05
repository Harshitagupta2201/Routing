import Header from "../Components/Header";
import React from "react";
import Footer from "../Components/Footer";
import RightSidebar from "../Components/RightSidebar";
import LeftSideBar from "../Components/LeftSideBar";

const Login = () => {
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
        <div
          style={{
            width: "400px",
            marginLeft: "80px",
            marginTop: "100px",
            height: "300px",
            backgroundColor: "rgba(54, 69, 79,0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <form>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <br />
            <br />
            <br />
            <input
              type={"email"}
              placeholder={"Enter your email here"}
              style={{
                backgroundColor: "rgba(40, 40, 43,0.5)",
                color: "white",
              }}
            />
            <br />
            <br />
            <input
              type={"password"}
              placeholder={"Enter your password"}
              style={{
                backgroundColor: "rgba(40, 40, 43,0.5)",
                color: "white",
              }}
            />
            <br />
            <br />
            <button className="btn btn-primary" style={{ marginLeft: "60px" }}>
              Login
            </button>
          </form>
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

export default Login;
