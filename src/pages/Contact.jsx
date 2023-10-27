import React from "react";

function Contact() {
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

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const labelStyle = {
    margin: "2px 5px",
    fontWeight: "600",
  };

  const formElementStyle = {
    marginBottom: "20px",
  };

  const buttonStyle = {
    alignSelf: "center",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    background: "blue",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div>
      <div style={heroStyle}>
        <div style={titleContainerStyle}>
          <h1 style={titleStyle}>Contact Us</h1>
        </div>
      </div>
      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum. Donec in efficitur leo. In hac habitasse platea
        dictumst. Aliquam erat volutpat. Sed feugiat commodo purus, in commodo
        ligula accumsan a.
      </p>
      <form style={formStyle}>
        <div style={formElementStyle}>
          <label style={labelStyle} htmlFor="name">
            Nama:
          </label>
          <input type="text" id="name" name="name" required />
        </div>
        <div style={formElementStyle}>
          <label style={labelStyle} htmlFor="email">
            Email:
          </label>
          <input type="email" id="email" name="email" required />
        </div>
        <div style={formElementStyle}>
          <label style={labelStyle} htmlFor="message">
            Pesan:
          </label>
          <textarea id="message" name="message" required rows="4"></textarea>
        </div>
        <div>
          <button style={buttonStyle} type="submit">
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
