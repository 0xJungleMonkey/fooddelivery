import React from "react";
import { FaLinkedin, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SlArrowUp } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <span class="mb-3 mb-md-0 text-muted ms-5">© 2023 Xinqi Davis</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex me-5">
          <li class="ms-3">
            <a
              class="text-muted"
              href="https://www.linkedin.com/in/xinqidavis/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>

          <li class="ms-3">
            <a
              class="text-muted"
              href="https://github.com/0xJungleMonkey"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
    // fixed-bottom
    // <MDBFooter className="bg-light text-center text-white ">
    //   <MDBContainer className="p-4 pb-0">
    //     <section className="mb-4">
    //       <MDBBtn
    //         floating
    //         className="m-1"
    //         style={{ backgroundColor: "#3b5998" }}
    //         href="#!"
    //         role="button"
    //       >
    //         <FaLinkedin size={30} />
    //       </MDBBtn>

    //       <MDBBtn
    //         floating
    //         className="m-1"
    //         style={{ backgroundColor: "#55acee" }}
    //         href="#!"
    //         role="button"
    //       >
    //         <FaLinkedinIn size={30} />
    //       </MDBBtn>

    //       <MDBBtn
    //         floating
    //         className="m-1"
    //         style={{ backgroundColor: "#dd4b39" }}
    //         href="#!"
    //         role="button"
    //       >
    //         <FaGithub size={30} />
    //       </MDBBtn>
    //       <MDBBtn
    //         floating
    //         className="m-1"
    //         style={{ backgroundColor: "#ac2bac" }}
    //         href="#!"
    //         role="button"
    //       >
    //         <HiOutlineMail size={30} />
    //       </MDBBtn>

    //       <MDBBtn
    //         floating
    //         className="m-1"
    //         style={{ backgroundColor: "#0082ca" }}
    //         href="#!"
    //         role="button"
    //       >
    //         <BsFillPersonLinesFill size={30} />
    //       </MDBBtn>

    //       <MDBBtn
    //         floating
    //         className="m-1"
    //         style={{ backgroundColor: "#333333" }}
    //         href="#!"
    //         role="button"
    //       >
    //         <MDBIcon fab icon="github" />
    //       </MDBBtn>
    //     </section>
    //   </MDBContainer>

    //   <div
    //     className="text-center p-3"
    //     style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    //   >
    //     © 2023 Copyright:
    //     <a className="text-white" href="https://mdbootstrap.com/">
    //       Xinqi Davis made with ❤️
    //     </a>
    //   </div>
    // </MDBFooter>
  );
}

export default Footer;
