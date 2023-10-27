import React from "react";

function About() {
  const heroStyle = {
    position: "relative",
    backgroundImage: "url(hero.jpg)",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "50px",
  };

  const titleContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 1,
  };

  const titleStyle = {
    color: "white",
    margin: 0,
  };

  const paragraphStyle = {
    marginTop: "10px",
    padding: "0 10%",
    textAlign: "center",
  };

  const galleryContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "16px",
    marginTop: "30px",
    marginBottom: "20px",
  };

  const teamContainerStyle = {
    ...galleryContainerStyle,
    marginBottom: "40px",
  };

  const imageStyle = {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  return (
    <div>
      <div style={heroStyle}>
        <div style={titleContainerStyle}>
          <h1 style={titleStyle}>About Us</h1>
        </div>
      </div>
      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum. Donec in efficitur leo. In hac habitasse platea
        dictumst. Aliquam erat volutpat. Sed feugiat commodo purus, in commodo
        ligula accumsan a.
      </p>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Our Project</h2>

      <div style={galleryContainerStyle}>
        <img src="code.jpg" alt="Kegiatan 1" style={imageStyle} />
        <img src="code1.jpg" alt="Kegiatan 2" style={imageStyle} />
        <img src="code2.jpg" alt="Kegiatan 3" style={imageStyle} />
        <img src="code.jpg" alt="Kegiatan 1" style={imageStyle} />
        <img src="code1.jpg" alt="Kegiatan 2" style={imageStyle} />
        <img src="code2.jpg" alt="Kegiatan 3" style={imageStyle} />
        <img src="code.jpg" alt="Kegiatan 2" style={imageStyle} />
        <img src="code1.jpg" alt="Kegiatan 3" style={imageStyle} />
      </div>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Our Team</h2>

      <div style={teamContainerStyle}>
        <img src="person.jpg" alt="Kegiatan 1" style={imageStyle} />
        <img src="person.jpg" alt="Kegiatan 2" style={imageStyle} />
        <img src="person.jpg" alt="Kegiatan 3" style={imageStyle} />
      </div>
    </div>
  );
}

export default About;
