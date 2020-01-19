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

    let timerFrame = document.getElementById("timerFrame");



    // var style = document.createElement('style');
    // style.textContent = '' +
    //   'body {border: 3px solid red}' +
    //   'img {display: none}'

    //   timerFrame.body.innerHTML;
    // timerFrame.open();
    // timerFrame.write(css);
    // timerFrame.close();
    // timerFrame.contentDocument.head.appendChild(style);

    // let doc = timerFrame.contentDocument;
    // doc.body.innerHTML = '<style type="text/css"> body {border: 3px solid red} img{display: none}</style>' + doc.body.innerHTML;
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
            <h3 style={{ marginTop: '15px' }}>Magh 9 - Magh 11</h3>
            {/* <h6 style={{ marginTop: '15px' }}>Submit your idea and be ready for the challenge!!</h6> */}
            {/* <HomeButton _bringForm={props._bringForm} />
            <iframe id="timerFrame" width="376" height="86" src="https://w2.countingdownto.com/2830194" frameborder="0">

            </iframe> */}
            <CountDown />
          </div>

        </Container>

      </div>
    </>
  );
}

export default IndexHeader;
