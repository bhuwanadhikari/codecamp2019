/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import axios from "axios";

function DarkFooter() {

  const [pageCount, setPageCount] = React.useState(null);


  React.useEffect(() => {


    let data = {
      time: new Date()
    }

    data.time = data.time.toISOString()

    console.log(data, 'what is thime now');
    console.log('---------------------------');


    (async () => {
      await axios.get('https:codecamp2019.herokuapp.com/count/')
        .then((res) => {
          setPageCount(res.data);
          console.log("successfully received the page count", res.data);
        }).catch((err) => {
          console.log(err, 'error  in the get of data');
        });


      await setTimeout(async () => {
        await axios.post('https:codecamp2019.herokuapp.com/count/', data)
          .then((res) => {
            setPageCount(res.data);
            console.log("successfully page count increased", res.data);
          }).catch((err) => {
            console.log(err, 'is the error in the page count increase');
          });
      }, 4000)


    })();

  }, []);

  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav style={{ width: '100%' }}>
          <ul style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}>
            <li>
              <a
                href="https://www.codecamp2019.co"
                target="_blank"
              >
                CodeCamp 2019
              </a>
            </li>

            <li className="ralewayFonted" style={{ paddingLeft: '20px', color: 'lavenderblush', fontSize: '0.9em' }}>
              Page Visits: {pageCount} times
            </li>
            <li className="copyright" id="copyright" >
              Hello Worlded By: {" "}
              <a
                href="https://bhuwanadhikari.com.np"
                target="_blank"
                style={{ color: 'silver' }}
              >
                Bhuwan Adhikari
          </a>

            </li>

          </ul>
        </nav>

      </Container>
    </footer>
  );
}

export default DarkFooter;
