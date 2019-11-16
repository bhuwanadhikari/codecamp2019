import React, { useEffect } from "react";
// react plugins that creates an input with a date picker
import Datetime from "react-datetime";

import RuralTourism from '../../assets/img/ruraltourism.jpg';

import {
    Button,
    FormGroup,
    Container,
    Modal,
    ModalBody,
    Row,
    Col,
    InputGroup,
    Input,
    InputGroupAddon,
    UncontrolledTooltip,
    PopoverBody,
    PopoverHeader,
    UncontrolledPopover,
    Label
} from "reactstrap";
import { EEXIST } from "constants";

// core components

function Javascript() {
    const [modal1, setModal1] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);
    const [memberNo, setMemberNo] = React.useState();
    const [members, setMembers] = React.useState(new Array(memberNo ? parseInt(memberNo) : 0).fill(''));

    const [showIntro, setShowIntro] = React.useState(false);
    const [showChoice, setShowChoice] = React.useState(true);

    const [formProgress, setFormProgress] = React.useState(3);
    const [choice, setChoice] = React.useState(0);

    const [applicationData, setApplicationData] = React.useState({
        theme: '',
        ideaName: '',
        teamName: '',
    });

    const [membersData, setMembersData] = React.useState(
        new Array(3).fill({
            name: 'ramnath',
            address: '',
            college: '',
            roll: ''
        })
    )



    const [agreement, setAgreement] = React.useState(true);

    useEffect(() => {
        // setMemberNo(parseInt(memberNo));
        console.log(typeof (memberNo), 'is the type');
        setMemberNo(memberNo ? parseInt(memberNo) : '');
        let bufferArr = new Array(memberNo ? parseInt(memberNo) : 0).fill('d');
        setMembers(bufferArr);
    }, [memberNo])

    console.log("Memberno", memberNo, 'and members are', members);

    const _next = () => {
        setFormProgress(formProgress + 1);
    }

    const _cancel = () => {
        setFormProgress(0);
    }

    const _previous = () => {
        setFormProgress(formProgress - 1);
    }

    const _choice = (val) => {
        setChoice(val);
    }

    const _submit = () => {
        setFormProgress(0);
    }


    const memberDetailForm = membersData.map((member, index) => {
        return (
            <React.Fragment key={index}>
                <Col md='4'>

                    <FormGroup>
                        <p style={{ fontSize: '0.9em', marginTop: '20px' }}>Details of Member {' '}{index + 1}</p>

                        <Input
                            className="form-control-primary appliForm"
                            placeholder="Name of Member"
                            type="text"
                            value={member.name}
                        ></Input>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            className="form-control-primary appliForm"
                            placeholder="Address"
                            type="text"
                            value={member.address}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className="form-control-primary appliForm"
                            placeholder="College/Institution Name"
                            type="text"
                            value={member.college}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className="form-control-primary appliForm"
                            placeholder="College Roll No"
                            type="text"
                            value={member.roll}
                        ></Input>
                    </FormGroup>
                </Col>
            </React.Fragment>
        )
    })

    return (
        <>
            <Container className='modalContainer'>
                <Button
                    className="nav-link btn-neutral"
                    color="info"
                    id="upgrade-to-pro"
                    onClick={() => setFormProgress(1)}
                >
                    <i className="now-ui-icons files_single-copy-04 mr-1"></i>
                    <p>Submit Idea</p>
                </Button>

                <Row>
                    <Col md="12" >




                        {/* intro modal*/}
                        {formProgress == 1 ?
                            (<Modal isOpen={formProgress == 1} toggle={() => setFormProgress(0)} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
                                <div className="modal-header justify-content-center">
                                    <button
                                        className="close"
                                        type="button"
                                        onClick={_cancel}
                                    >
                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                    </button>
                                    <h4 className="title title-up">Introduction to CodeCamp 2019</h4>
                                </div>


                                <ModalBody>
                                    <p className="isCentered">We suggest you first to read the small Documentation below</p>
                                    <p className="leftAligned aboutText" style={{ maxHeight: '50vh', overflowY: 'scroll', margin: 'auto', maxWidth: '800px' }}>CodeCamp 2019 is a 3 day event on the theme “Rural Tourism” focusing on the development of innovative solutions and tools in order to develop and promote rural tourism in Nepal. We hope to create a platform where participants can create tools and services which can boost the number of tourists who visit the rural areas of Nepal and also extend the time period of their stay. The event  aims to bring together the best innovative and creative young minds from the IT sector and let them do what they do best, come up with elegant solutions to the problems Nepal faces in the sector of Tourism, especially in the rural areas. The participants will come together to brainstorm a solution, build it and deploy it in a matter of 3 days. It will connect aspiring talents entering into the field meet, interact, learn and compete against each other. It is also in our utmost priority that the solutions tools we develop in these three days have utility and  are actually used in the real world. Participants present their working prototype at the end of the camp, and are  judged accordingly. Our goal is not only to make this program a successful one in the three days it runs but act as a platform to develop ideas and prototypes which will have a lasting impact in the tourism sector for years to come. </p>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input checked={agreement} onChange={() => { setAgreement(!agreement) }} type="checkbox"></Input>
                                                <span className="form-check-sign"></span>
                                                I accept the <a href='codecamp2019.co/terms-and-conditions'>terms and conditions</a> of the CodeCamp 2019.
                                        </Label>
                                        </FormGroup>
                                    </Row>
                                </ModalBody>

                                <div className="modal-footer">
                                    <Button color="default" type="button"
                                        onClick={_cancel}>
                                        Cancel
                                    </Button>
                                    <Button
                                        color="danger"
                                        type="button"
                                        onClick={_next}
                                    >
                                        Next
                                </Button>
                                </div>
                            </Modal>) :
                            null}






                        {/* choice modal*/}

                        {formProgress == 2 ?
                            (<Modal isOpen={formProgress == 2} toggle={() => setFormProgress(0)} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
                                <div className="modal-header justify-content-center">
                                    <button
                                        className="close"
                                        type="button"
                                        onClick={_cancel}
                                    >
                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                    </button>
                                    <h4 className="title title-up">Themes of CodeCamp 2019</h4>
                                </div>


                                <ModalBody>
                                    <p className="isCentered">What is the theme of your idea?</p>
                                    <Row>

                                        <Col
                                            style={{
                                                border: choice == 1 ? '2px solid  #2ca8ff' : '2px solid transparent',
                                            }}
                                            xs="4"
                                            className='choice'
                                            onClick={() => _choice(1)}
                                        >
                                            <img className='choiceImg' src={RuralTourism}></img>
                                            <p className='isCentered bolded choiceName'>Rural Tourism</p>
                                        </Col>

                                        <Col
                                            style={{
                                                border: choice == 2 ? '2px solid  #2ca8ff' : '2px solid transparent',
                                            }}
                                            className='choice'
                                            xs="4"
                                            onClick={() => _choice(2)}
                                        >
                                            <img className='choiceImg' src={RuralTourism}></img>
                                            <p className='isCentered bolded choiceName'>e-Governance</p>
                                        </Col>

                                        <Col
                                            style={{
                                                border: choice == 3 ? '2px solid  #2ca8ff' : '2px solid transparent',
                                            }}
                                            className='choice'
                                            xs="4"
                                            onClick={() => _choice(3)}
                                        >
                                            <img className='choiceImg' src={RuralTourism}></img>
                                            <p className='isCentered bolded choiceName'>Public Health</p>
                                        </Col>

                                    </Row>
                                </ModalBody>
                                <div className="modal-footer">
                                    <Button color="default" type="button"
                                        onClick={_previous}>
                                        Previous
                                    </Button>
                                    <Button
                                        color="danger"
                                        type="button"
                                        onClick={_next}
                                    >
                                        Next
                                </Button>
                                </div>
                            </Modal>) :
                            null}


                        {/* Main form modal*/}
                        {formProgress == 3 ?
                            (<Modal isOpen={formProgress == 3} toggle={() => setFormProgress(0)} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
                                <div className="modal-header justify-content-center">
                                    <button
                                        className="close"
                                        type="button"
                                        onClick={_cancel}
                                    >
                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                    </button>
                                    <h4 className="title title-up">Application Details</h4>
                                </div>


                                <ModalBody>
                                    <p className="isCentered">Fill the form and be ready for the challenge!</p>
                                    <Row>

                                        <Col lg="9" sm="11">
                                            <FormGroup className="">
                                                <Input
                                                    className="form-control-success appliForm"
                                                    placeholder='Title of your Idea'
                                                    type="text"
                                                ></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col lg="9" sm="11">
                                            <FormGroup>
                                                <Input
                                                    className="form-control-primary appliForm"
                                                    placeholder="Name of your Team"
                                                    type="text"
                                                ></Input>
                                            </FormGroup>
                                        </Col>





                                        {memberDetailForm}





                                        <Col lg="9" sm="11">
                                            <FormGroup>
                                                <Input
                                                    style={{ borderRadius: '10px', border: '1px solid silver' }}
                                                    id="exampleFormControlTextarea1"
                                                    rows="5"
                                                    type="textarea"
                                                    placeholder="Detail Explanation"
                                                ></Input>
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                </ModalBody>
                                <div className="modal-footer">
                                    <Button color="default" type="button"
                                        onClick={_previous}>
                                        Previous
                                    </Button>
                                    <Button
                                        color="danger"
                                        type="button"
                                        onClick={_submit}
                                    >
                                        Submit
                                </Button>
                                </div>
                            </Modal>) :
                            null}

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Javascript;
