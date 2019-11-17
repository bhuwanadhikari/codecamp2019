import React, { useEffect } from "react";
// react plugins that creates an input with a date picker
import Datetime from "react-datetime";

import theme1 from '../../assets/img/ruraltourism.jpg';
import theme2 from '../../assets/img/ruraltourism.jpg';
import theme3 from '../../assets/img/ruraltourism.jpg';

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
import { EEXIST, SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from "constants";

// core components

function Javascript() {
    const [modal1, setModal1] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);


    const [formProgress, setFormProgress] = React.useState(4);
    const [choice, setChoice] = React.useState(0);
    const [submitStatus, setSubmitStatus] = React.useState('unSubmitted')
    const [submitLabel, setSubmitLabel] = React.useState('Submit');

    const [applicationData, setApplicationData] = React.useState({
        theme: '',
        ideaName: '',
        teamName: '',
    });

    const memberArr = [{
        name: '',
        address: '',
        college: '',
        roll: ''
    }, {
        name: '',
        address: '',
        college: '',
        roll: ''
    }, {
        name: '',
        address: '',
        college: '',
        roll: ''
    },]

    const [membersData, setMembersData] = React.useState(memberArr);

    const [agreement, setAgreement] = React.useState(true);

    const _applicationDataChange = (e) => {
        setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
    }

    const _memberDataChange = (e, index, type) => {

        const tempData = membersData;
        tempData[index][type] = e.target.value;
        setMembersData(tempData);
        console.log("The whole state of the apps is now", tempData, membersData);
    }

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
        setApplicationData({ ...applicationData, theme: val });
    }

    const _submit = () => {

        if (submitLabel == 'Done') {
            setFormProgress(0);
            setSubmitLabel('Submit');
            return;
        }
        setSubmitLabel('Submitting');
        //api call to ma submit the form
        //set submit label to submitted
        setSubmitLabel('Done')
    }




    const memberDetailForm = membersData.map((member, index) => {
        return (
            <React.Fragment key={index}>
                <Col md='4'>

                    <p style={{ fontSize: '0.9em', marginTop: '20px' }}>Details of Member {' '}{index + 1}</p>
                    <FormGroup>
                        <Input
                            className="form-control-primary appliForm"
                            placeholder="Name of Member"
                            type="text"
                            defaultValue={member.name}
                            onChange={(e) => { _memberDataChange(e, index, 'name') }}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className="form-control-primary appliForm"
                            placeholder="Address"
                            type="text"
                            defaultValue={member.address}
                            onChange={(e) => { _memberDataChange(e, index, 'address') }}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className="form-control-primary appliForm"
                            placeholder="College/Institution Name"
                            type="text"
                            defaultValue={member.college}
                            onChange={(e) => { _memberDataChange(e, index, 'college') }}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            className="form-control-primary appliForm"
                            placeholder="College Roll No"
                            type="text"
                            defaultValue={member.roll}
                            onChange={(e) => { _memberDataChange(e, index, 'roll') }}
                        ></Input>
                    </FormGroup>
                </Col>
            </React.Fragment>
        )
    })

    const themesUI = [{ name: 'Rural Tourism', src: theme1 }, { name: 'e-Governance', src: theme2 }, { name: 'Public Health', src: theme3 }].map((theme, index) => {
        return (
            <Col key={index}
                style={{
                    border: choice == index + 1 ? '2px solid  #2ca8ff' : '2px solid transparent',
                }}
                xs="4"
                className='choice'
                onClick={() => _choice(index + 1)}
            >
                <img className='choiceImg' src={theme.src}></img>
                <p className='isCentered bolded choiceName'>{theme.name}</p>
            </Col>
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



                                        {themesUI}
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
                                                    name="ideaName"
                                                    defaultValue={applicationData.ideaName}
                                                    onChange={_applicationDataChange}
                                                ></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col lg="9" sm="11">
                                            <FormGroup>
                                                <Input
                                                    className="form-control-primary appliForm"
                                                    placeholder="Name of your Team"
                                                    type="text"
                                                    name="teamName"
                                                    defaultValue={applicationData.teamName}
                                                    onChange={_applicationDataChange}
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
                                        onClick={_next}
                                    >
                                        Next
                                </Button>
                                </div>
                            </Modal>) :
                            null}



                        {/* Final modal*/}
                        {formProgress == 4 ?
                            (<Modal isOpen={formProgress == 4} toggle={() => setFormProgress(0)} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
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
                                    <p className="isCentered">Check your form once again if anything is wrong.</p>


                                    <p className=" blackText pureCenter">If everything is okay, You can submit the form now.</p>


                                </ModalBody>
                                <div className="modal-footer">
                                    <Button color="default" type="button"
                                        onClick={submitStatus != 'unSubmitted' ? _cancel : _previous}>
                                        {submitStatus != 'unSubmitted' ? 'Cancel' : 'Previous'}
                                    </Button>
                                    <Button
                                        color="danger"
                                        type="button"
                                        onClick={_submit}
                                    >
                                        {submitLabel}
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
