/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Container, NavItem,
} from "reactstrap";
import CountDown from "./CountDown";
import IdeaModal from "../../views/index-sections/IdeaModal";
import HomeButton from "views/HomeButton";


// core components
function IndexHeader(props) {
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
            <h3 style={{ marginTop: '15px' }}>Poush 9 - Poush 11</h3>
            {/* <h6 style={{ marginTop: '15px' }}>Submit your idea and be ready for the challenge!!</h6> */}
            <HomeButton _bringForm={props._bringForm} />
          </div>

        </Container>

      </div>
    </>
  );
}

export default IndexHeader;
