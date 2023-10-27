import React from "react";

function Footer() {
  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: "0 3rem",
    fontWeight: "600",
  };

  const listItemStyle = {
    marginBottom: "10px",
  };

  const listContainerStyle = {
    display: "flex",
    alignItems: "flex-start",
    width: "60%",
    justifyContent: "center",
    marginTop: "0.1px",
  };

  const logoContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  };

  const listheader = {
    fontWeight: "700",
    margin: "0.2rem 0",
    color: "gray",
    marginBottom: "5px",
  };

  const listItemWithImage = {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  };

  const listItemImage = {
    marginRight: "10px",
    width: "20px",
    height: "20px",
  };

  return (
    <footer style={footerStyle}>
      <div style={logoContainerStyle}>
        <img src="logo-ilab.png" alt="Logo" style={{ width: "200px" }} />
        <p>@copy right MHNF</p>
      </div>

      <div style={listContainerStyle}>
        <ul style={listStyle}>
          <li style={listheader}>Services</li>
          <li style={listItemStyle}>Email Marketing</li>
          <li style={listItemStyle}>Campaigns</li>
          <li style={listItemStyle}>Branding</li>
          <li style={listItemStyle}>Offline</li>
        </ul>
        <ul style={listStyle}>
          <li style={listheader}>About</li>
          <li style={listItemStyle}>Our Story</li>
          <li style={listItemStyle}>Benefit</li>
          <li style={listItemStyle}>Team</li>
          <li style={listItemStyle}>Careers</li>
        </ul>
        <ul style={listStyle}>
          <li style={listheader}>Follow Us</li>
          <li style={listItemWithImage}>
            <img src="logo-facebook.png" alt="Facebook" style={listItemImage} />
            facebook
          </li>
          <li style={listItemWithImage}>
            <img src="logo-twitter.png" alt="Twitter" style={listItemImage} />
            twitter
          </li>
          <li style={listItemWithImage}>
            <img
              src="logo-instagram.png"
              alt="Instagram"
              style={listItemImage}
            />
            instagram
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
