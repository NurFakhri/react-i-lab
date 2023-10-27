import React from "react";

function Home() {
  const heroStyle = {
    position: "relative",
    backgroundImage: "url(hero.jpg)",
    height: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "50px",
  };

  const titleContainerStyle = {
    position: "absolute",
    left: "15%",
    textAlign: "left",
  };

  const titleStyle = {
    color: "white",
    margin: 0,
  };

  return (
    <div style={heroStyle}>
      <div style={titleContainerStyle}>
        <h1 style={titleStyle}>Selamat Datang</h1>
        <p style={titleStyle}>di website praktikum pemrograman website</p>
      </div>
    </div>
  );
}

export default Home;
