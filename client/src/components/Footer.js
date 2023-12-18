import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
        <span className="mb-3 mb-md-0 text-muted ">© 2023 Xinqi Davis</span>
        <div className="ms-3">
          <a
            className="text-muted"
            href="https://www.linkedin.com/in/xinqidavis/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <div className="ms-3">
          <a
            className="text-muted"
            href="https://github.com/0xJungleMonkey"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

/* <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-muted ms-5 mt-3">
            © 2023 Xinqi Davis
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-5">
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://www.linkedin.com/in/xinqidavis/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className="ms-3">
            <a
              className="text-muted"
              href="https://github.com/0xJungleMonkey"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
        </ul> */
