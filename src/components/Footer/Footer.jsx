import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const [bounce, setBounce] = useState("fa-brands fa-github fa-2xl");

  return (
    <div
      id="footer"
      onMouseEnter={() => setBounce("fa-brands fa-github fa-2xl fa-bounce")}
      onMouseLeave={() => setBounce("fa-brands fa-github fa-2xl")}
    >
      <p>Copyright 2023.</p>
      <Link
        className="link__github"
        to="https://github.com/eoGimenez"
        target="_blank"
      >
        <i className={bounce}>
          {" "}
          <span> GitHub</span>
        </i>
      </Link>
      <p>eoGimenez</p>
    </div>
  );
}
