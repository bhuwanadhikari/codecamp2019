/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import CountDown from "./CountDown";

// core components
function IndexHeader() {
  let pageHeader = React.createRef();

  const [timeLeft, setTimeLeft] = React.useState({
    hrs: 43,
    mins: 44,
    secs: 34
  })

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              className="n-logo"

              src={require("assets/img/whitelogo.png")}
            ></img>
            <h3>Poush 8 - Poush 10</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
