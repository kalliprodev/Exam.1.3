import React from "react";
import "./Footer.scss"
function Footer(props) {
  return (
    <footer className="footer w-full">
      <p className="">
        © {new Date().getFullYear()}. All Rights Reserved. Dev:{" "}
        <a href="https://www.instagram.com/_kallipro/"> Kallibek ISKENDEROV</a>
      </p>
    </footer>
  );
}

export default Footer;
