/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.codecamp2019.co"
                target="_blank"
              >
                CodeCamp 2019
              </a>
            </li>

            <li className="ralewayFonted" style={{ paddingLeft: '20px', color: 'lavenderblush', fontSize: '0.9em' }}>
              Page Visits: 113 times <span style={{ color: 'orange' }}>(Not working for now.)</span>
            </li>

          </ul>
        </nav>
        <div className="copyright" id="copyright">
          {/* © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Invision
          </a> 
          .*/}Hello Worlded By: {" "}
          <a
            href="https://bhuwanadhikari.com.np"
            target="_blank"
            style={{ color: 'silver' }}
          >
            Bhuwan Adhikari
          </a>

        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
