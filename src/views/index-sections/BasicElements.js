import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Accordions from "./Accordions";

// core components

function BasicElements() {
  const [leftFocus, setLeftFocus] = React.useState(false);
  const [rightFocus, setRightFocus] = React.useState(false);
  React.useEffect(() => {
    {/* if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [50],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    } */}
  });
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <div id="about" style={{ height: '1px', width: '100%', position: 'relative', top: '-60px' }}></div>

          <h2 className="topMarginedTitle isCentered" >About</h2>
          <p className="leftAligned aboutText" style={{ margin: 'auto', maxWidth: '800px' }}>CodeCamp 2019 is a 3 day event on the theme “Rural Tourism” focusing on the development of innovative solutions and tools in order to develop and promote rural tourism in Nepal. We hope to create a platform where participants can create tools and services which can boost the number of tourists who visit the rural areas of Nepal and also extend the time period of their stay. The event  aims to bring together the best innovative and creative young minds from the IT sector and let them do what they do best, come up with elegant solutions to the problems Nepal faces in the sector of Tourism, especially in the rural areas. The participants will come together to brainstorm a solution, build it and deploy it in a matter of 3 days. It will connect aspiring talents entering into the field meet, interact, learn and compete against each other. It is also in our utmost priority that the solutions tools we develop in these three days have utility and  are actually used in the real world. Participants present their working prototype at the end of the camp, and are  judged accordingly. Our goal is not only to make this program a successful one in the three days it runs but act as a platform to develop ideas and prototypes which will have a lasting impact in the tourism sector for years to come. </p>

          <div id="sponsors" style={{ height: '1px', width: '100%', position: 'relative', top: '-60px' }}></div>
          <h2 className="topMarginedTitle isCentered"  >Sponsors</h2>

          <p className=" isCentered ralewayFonted" style={{ textAlign: 'center', fontSize: '0.9em', }}>Want to be a sponsor? Mail us at <a style={{ color: "#123456" }} href="mailto:contact@codecamp2019.co?subject = Feedback&body = Message">contact@codecamp2019.co</a></p>




          {/* Title Sponsor */}
          {/*
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <img
                alt="Sponsor ko alt"
                className="rounded-circle img-raised"
                onClick={() => console.log("go to page of the sponsor")}
                src={require("assets/img/flooop.png")}
                style={{ marginLeft: 'calc(50% - 100px)', height: '200px', width: '200px', objectFit: 'fill' }}
              ></img>
              <p className="category isCentered" style={{ margin: '15px auto' }}>Title Sponsor</p>
            </Col>
          </Row>
          */}


          {/* Level 2 sponsors */}
          {/* <Row>
            <Col xs="12" sm="4">
              <img
                alt="Sponsor ko alt"
                className="rounded-circle img-raised"
                onClick={() => console.log("go to page of the sponsor")}
                src={require("assets/img/flooop.png")}
                style={{ marginLeft: 'calc(50% - 75px)', height: '150px', width: '150px', objectFit: 'fill' }}
              ></img>
              <p className="category isCentered" style={{ margin: '15px auto' }}>Title Sponsor</p>
            </Col>
            <Col xs="12" sm="4">
              <img
                alt="Sponsor ko alt"
                className="rounded-circle img-raised"
                onClick={() => console.log("go to page of the sponsor")}
                src={require("assets/img/flooop.png")}
                style={{ marginLeft: 'calc(50% - 75px)', height: '150px', width: '150px', objectFit: 'fill' }}
              ></img>
              <p className="category isCentered" style={{ margin: '15px auto' }}>Title Sponsor</p>
            </Col>
            <Col xs="12" sm="4">
              <img
                alt="Sponsor ko alt"
                className="rounded-circle img-raised"
                onClick={() => console.log("go to page of the sponsor")}
                src={require("assets/img/flooop.png")}
                style={{ marginLeft: 'calc(50% - 75px)', height: '150px', width: '150px', objectFit: 'fill' }}
              ></img>
              <p className="category isCentered" style={{ margin: '15px auto' }}>Title Sponsor</p>
            </Col>
          </Row>

          */}
          {/* Level 3 sponsors */}
          {/*
          <Row>
            <Col xs="6" sm="3" md="3">
              <img
                alt="Sponsor ko alt"
                className="rounded-circle img-raised"
                onClick={() => console.log("go to page of the sponsor")}
                src={require("assets/img/flooop.png")}
                style={{ marginLeft: 'calc(50% - 65px)', height: '130px', width: '130px', objectFit: 'fill' }}
              ></img>
              <p className="category isCentered" style={{ margin: '15px auto' }}>Title Sponsor</p>
            </Col>
            <Col xs="6" sm="3" md="3">
              <img
                alt="Sponsor ko alt"
                className="rounded-circle img-raised"
                onClick={() => console.log("go to page of the sponsor")}
                src={require("assets/img/flooop.png")}
                style={{ marginLeft: 'calc(50% - 65px)', height: '130px', width: '130px', objectFit: 'fill' }}
              ></img>
              <p className="category isCentered" style={{ margin: '15px auto' }}>Title Sponsor</p>
            </Col>
            <Col xs="6" sm="3" md="3">
              <img
                alt="Sponsor ko alt"
                className="rounded-circle img-raised"
                onClick={() => console.log("go to page of the sponsor")}
                src={require("assets/img/flooop.png")}
                style={{ marginLeft: 'calc(50% - 65px)', height: '130px', width: '130px', objectFit: 'fill' }}
              ></img>
              <p className="category isCentered" style={{ margin: '15px auto' }}>Title Sponsor</p>
            </Col>
            <Col xs="6" sm="3" md="3">
              <img
                alt="Sponsor ko alt"
                className="rounded-circle img-raised"
                onClick={() => console.log("go to page of the sponsor")}
                src={require("assets/img/flooop.png")}
                style={{ marginLeft: 'calc(50% - 65px)', height: '130px', width: '130px', objectFit: 'fill' }}
              ></img>
              <p className="category isCentered" style={{ margin: '15px auto' }}>Title Sponsor</p>
            </Col>
          </Row>
 */}

          <div id="faqs" style={{ height: '1px', width: '100%', position: 'relative', top: '-60px' }}></div>
          <h2 style={{ textAlign: 'center', marginTop: '80px' }} id='faqs'>FAQs</h2>
          <Accordions />

          <div id="schedule" style={{ height: '1px', width: '100%', position: 'relative', top: '-60px' }}></div>
          <h2 className="topMarginedTitle isCentered" >Schedule</h2>
          <p className=" isCentered ralewayFonted" style={{ textAlign: 'center', fontSize: '0.9em', color: '#123456' }}>Schedule will be published soon. Stay tuned!!</p>







          <Row>
            <Col md="10">
              <Button color="info" type="button">
                Default
              </Button>
              <Button className="btn-round" color="info" type="button">
                Round
              </Button>
              <Button className="btn-round" color="info" type="button">
                <i className="now-ui-icons ui-2_favourite-28"></i>
                With Icon
              </Button>
              <Button className="btn-icon btn-round" color="info" type="button">
                <i className="now-ui-icons ui-2_favourite-28"></i>
              </Button>
              <Button className="btn-round" color="info" outline type="button">
                Outline
              </Button>
            </Col>
          </Row>
          <p className="category">Pick your size</p>
          <Row>
            <Col md="10">
              <Button color="info" size="sm">
                Small
              </Button>
              <Button color="info">Regular</Button>
              <Button color="info" size="lg">
                Large
              </Button>
            </Col>
          </Row>
          <p className="category">Pick your color</p>
          <Row>
            <Col md="10">
              <Button color="default">Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="info">Info</Button>
              <Button color="success">Success</Button>
              <Button color="warning">Warning</Button>
              <Button color="danger">Danger</Button>
              <Button className="btn-neutral" color="default">
                Neutral
              </Button>
            </Col>
          </Row>
          <h4>Links</h4>
          <Row>
            <Col md="8">
              <Button color="link">Default</Button>
              <Button className="btn-link" color="primary">
                Primary
              </Button>
              <Button className="btn-link" color="info">
                Info
              </Button>
              <Button className="btn-link" color="success">
                Success
              </Button>
              <Button className="btn-link" color="warning">
                Warning
              </Button>
              <Button className="btn-link" color="danger">
                Danger
              </Button>
            </Col>
          </Row>
          <div className="space-70"></div>
          <div id="inputs">
            <h4>Inputs</h4>
            <p className="category">Form Controls</p>
            <Row>
              <Col lg="3" sm="6">
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <FormGroup className="has-success">
                  <Input
                    className="form-control-success"
                    defaultValue="Success"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <FormGroup className="has-danger">
                  <Input
                    className="form-control-danger"
                    defaultValue="Error Input"
                    type="email"
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <InputGroup className={leftFocus ? "input-group-focus" : ""}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user-circle"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Left Font Awesome Icon"
                    type="text"
                    onFocus={() => setLeftFocus(true)}
                    onBlur={() => setLeftFocus(false)}
                  ></Input>
                </InputGroup>
              </Col>
              <Col lg="3" sm="6">
                <InputGroup className={rightFocus ? "input-group-focus" : ""}>
                  <Input
                    placeholder="Right Nucleo Icon"
                    type="text"
                    onFocus={() => setRightFocus(true)}
                    onBlur={() => setRightFocus(false)}
                  ></Input>
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="now-ui-icons users_single-02"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </div>
          <div className="space-70"></div>
          <Row id="checkRadios">
            <Col className="mb-4" lg="3" sm="6">
              <p className="category">Checkboxes</p>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Unchecked
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input defaultChecked type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Checked
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input disabled type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Disabled Unchecked
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input defaultChecked disabled type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  Disabled Checked
                </Label>
              </FormGroup>
            </Col>
            <Col className="mb-4" lg="3" sm="6">
              <p className="category">Radios</p>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Radio is off
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Radio is on
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio" disabled>
                <Label check>
                  <Input
                    defaultValue="option3"
                    disabled
                    id="exampleRadios2"
                    name="exampleRadios1"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Disabled radio is off
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio" disabled>
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option4"
                    disabled
                    id="exampleRadios2"
                    name="exampleRadios1"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                  Disabled radio is on
                </Label>
              </FormGroup>
            </Col>
            <Col lg="3" sm="6">
              <p className="category">Toggle Buttons</p>
              <Switch offColor="" offText="" onColor="" onText=""></Switch>
              <br></br>
              <Switch defaultValue={false} offColor="" onColor=""></Switch>
            </Col>
            <Col lg="3" sm="6">
              <p className="category">Sliders</p>
              <div className="slider" id="sliderRegular"></div>
              <br></br>
              <div className="slider slider-primary" id="sliderDouble"></div>
            </Col>
          </Row>








        </Container>
      </div>
    </>
  );
}

export default BasicElements;