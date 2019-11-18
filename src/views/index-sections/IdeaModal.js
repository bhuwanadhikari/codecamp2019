import React, { useEffect } from "react";
// react plugins that creates an input with a date picker
import Datetime from "react-datetime";
import axios from "axios";

import theme1 from '../../assets/img/theme1.png';
import theme2 from '../../assets/img/theme2.png';
import theme3 from '../../assets/img/theme3.png';

import selectCss from '../../assets/css/selectCss.css';

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
import Error from "../../components/Error/Error";
import { validateApplicationData } from "../../validation/validate";
import { validateMemberData } from "../../validation/validate";

// core components

function Javascript() {


	const [formProgress, setFormProgress] = React.useState(0);
	const [choice, setChoice] = React.useState('');
	let [submitLabel, setSubmitLabel] = React.useState('Submit');

	let [applicationData, setApplicationData] = React.useState({
		ideaName: '',
		teamName: '',
		theme: '',
		pdf: '',
		pdfLink: ''
	});

	let memberArr = [{
		photo: '',
		photoLink: '',
		name: '',
		phone: '',
		size: '',
		address: '',
		college: '',
		roll: '',
		email: ''
	}, {
		photo: '',
		photoLink: '',
		name: '',
		phone: '',
		size: '',
		address: '',
		college: '',
		roll: '',
		email: ''
	}, {
		photo: '',
		photoLink: '',
		name: '',
		phone: '',
		size: '',
		address: '',
		college: '',
		roll: '',
		email: ''
	}];

	let [memberDataError, setMemberDataError] = React.useState([{}, {}, {}]);
	let [applicationDataError, setApplicationDataError] = React.useState({});

	let [membersData, setMembersData] = React.useState(memberArr);
	const [time, setTime] = React.useState(new Date().getTime());
	console.log(time, 'is time now');

	let [agreement, setAgreement] = React.useState(false);
	let [agreementError, setAgreementError] = React.useState('');


	let _applicationDataChange = (e) => {

		console.log("The name of form focused is", e.target.name);
		if (e.target.name === 'pdf') {
			setApplicationDataError({ ...applicationDataError, pdf: '', pdfLink: '' });
			setApplicationData({ ...applicationData, pdf: e.target.files[0], pdfLink: URL.createObjectURL(e.target.files[0]) });
			return;
		}
		setApplicationDataError({ ...applicationDataError, [e.target.name]: '' });
		setApplicationData({ ...applicationData, [e.target.name]: e.target.value });

	}

	const _memberDataChange = (e, index, type) => {

		console.log("member data change is called")

		if (type === 'photo') {

			const tempData = membersData;
			tempData[index].photo = e.target.files[0];
			tempData[index].photoLink = URL.createObjectURL(e.target.files[0]);
			setMembersData(tempData);

			let tempErrorData = memberDataError;
			tempErrorData[index].photo = '';
			setMemberDataError(tempErrorData);
			console.log("value updated si", membersData[index][type]);
			setTime(new Date().getTime());
			return;
		}


		const tempData = membersData;
		tempData[index][type] = e.target.value;
		setMembersData(tempData);
		// console.log("The whole state of the apps is now", tempData, membersData);

		const tempMemberDataError = memberDataError;
		tempMemberDataError[index][type] = '';
		console.log("value updated si", membersData[index][type]);
		setTime(new Date().getTime());

		setMemberDataError(tempMemberDataError);
	}

	const _tshirtSizeChange = (e, index) => {
		const tempData = membersData;
		tempData[index].size = e.target.value;
		setMembersData(tempData);

		const tempMemberDataError = memberDataError;
		tempMemberDataError[index].size = '';
		setTime(new Date().getTime());

		setMemberDataError(tempMemberDataError);
	}

	const _continue = () => {

		if (formProgress === 1) {
			if (!agreement) {
				setAgreementError('You must agree to our terms and conditions to continue!');
				return;
			}
		}

		if (formProgress === 2) {
			var appErrors = validateApplicationData(applicationData).errors;
			if (appErrors.theme) {
				setApplicationDataError({ ...applicationDataError, theme: appErrors.theme })
				return;
			}
		}

		if (formProgress === 3) {

			var { isValid, errors } = validateApplicationData(applicationData);
			var { isMemberDataValid, memberErrors } = validateMemberData(membersData);
			if (!isValid || !isMemberDataValid) {
				console.log('is things working?')
				if (!isValid) {
					// console.log("erros are", errors);
					setApplicationDataError({ ...applicationDataError, ...errors });
				}
				if (!isMemberDataValid) {
					// console.log("member errors are", memberErrors);
					setMemberDataError({ ...memberDataError, ...memberErrors });
				}

				return;

			}
		}
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
		setApplicationDataError({ ...applicationDataError, theme: '' })
	}

	const _submit = () => {

		console.log('here is all of the data of the application', {
			...applicationData, team: membersData
		});

		if (submitLabel == 'Done') {
			setFormProgress(0);
			setSubmitLabel('Submit');
			return;
		}


		if (submitLabel === 'Submit') {
			setSubmitLabel('Submitting');
			axios.post('', { ...membersData, team: applicationData })
				.then((res) => {
					console.log("Successfully submitted here");
				}).catch((err) => {
					console.log("Error has been occured", err);
				});
		}
		//api call to ma submit the form
		//set submit label to submitted
		setSubmitLabel('Done')
	}




	const memberDetailForm = membersData.map((member, index) => {
		return (
			<React.Fragment key={index}>
				<Col md='4'>

					<p style={{ fontSize: '0.9em', marginTop: '20px' }}>Details of Member {' '}{index + 1}{index === 2 ? '(Optional)' : null}</p>

					<p className='aboutText' style={{ fontSize: '0.9em', marginBottom: '5px' }}>{`Upload photo of Member ${index + 1}`}</p>
					<input
						className="form-control-primary appliForm"
						style={{ fontSize: '0.9em', margin: '10px', marginTop: 0 }}
						type="file"
						name='photo'
						onChange={(e) => { _memberDataChange(e, index, 'photo') }}
					/>
					{memberDataError[index].photo ? <Error>{memberDataError[index].photo}</Error> : null}
					<FormGroup>
						<Input
							className="form-control-primary appliForm"
							placeholder="Name of Member"
							type="text"
							defaultValue={member.name}
							onChange={(e) => { _memberDataChange(e, index, 'name') }}
						></Input>
						<Error>{memberDataError[index].name}</Error>
					</FormGroup>
					<FormGroup>
						<Input
							className="form-control-primary appliForm"
							placeholder="Email of Member"
							type="text"
							defaultValue={member.email}
							onChange={(e) => { _memberDataChange(e, index, 'email') }}
						></Input>
						{memberDataError[index].email ? <Error>{memberDataError[index].email}</Error> : null}
					</FormGroup>
					<FormGroup>
						<select
							name="slct" id="slct"
							onChange={e => _tshirtSizeChange(e, index)}
						>
							<option selected disabled>Choose T-shirt Size</option>
							<option value="0">SM</option>
							<option value="1">M</option>
							<option value="2">L</option>
							<option value="3">XL</option>
							<option value="4">XXL</option>
						</select>
						{memberDataError[index].size ? <Error>{memberDataError[index].size}</Error> : null}
					</FormGroup>
					<FormGroup>
						<Input
							className="form-control-primary appliForm"
							placeholder="Phone No:"
							type="text"
							defaultValue={member.phone}
							onChange={(e) => { _memberDataChange(e, index, 'phone') }}
						></Input>
						{memberDataError[index].phone ? <Error>{memberDataError[index].phone}</Error> : null}
					</FormGroup>
					<FormGroup>
						<Input
							className="form-control-primary appliForm"
							placeholder="Address"
							type="text"
							defaultValue={member.address}
							onChange={(e) => { _memberDataChange(e, index, 'address') }}
						></Input>
						{memberDataError[index].address ? <Error>{memberDataError[index].address}</Error> : null}
					</FormGroup>
					<FormGroup>
						<Input
							className="form-control-primary appliForm"
							placeholder="College/Institution Name"
							type="text"
							defaultValue={member.college}
							onChange={(e) => { _memberDataChange(e, index, 'college') }}
						></Input>
						{memberDataError[index].college ? <Error>{memberDataError[index].college}</Error> : null}
					</FormGroup>
					<FormGroup>
						<Input
							className="form-control-primary appliForm"
							placeholder="College Roll No"
							type="text"
							defaultValue={member.roll}
							onChange={(e) => { _memberDataChange(e, index, 'roll') }}
						></Input>
						{memberDataError[index].roll ? <Error>{memberDataError[index].roll}</Error> : null}
					</FormGroup>
				</Col>
			</React.Fragment>
		)
	})

	const themesUI = [{ name: 'Rural Tourism', src: theme1 }, { name: 'e-Governance', src: theme2 }, { name: 'Public Health', src: theme3 }].map((theme, index) => {
		return (
			<Col key={index}
				style={{

					border: choice === theme.name ? '2px solid  #2ca8ff' : '2px solid transparent',
				}}
				xs="4"
				className='choice'
				onClick={() => _choice(theme.name)}
			>
				<img className='choiceImg' src={theme.src}></img>
				<p className='isCentered bolded choiceName'>{theme.name}</p>
			</Col>
		)
	})


	console.log("Rerendered");

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
							(<Modal isOpen={formProgress === 1} toggle={() => setFormProgress(0)} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
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
												<Input checked={agreement} onChange={() => {

													setAgreement(!agreement);
													if (!agreement) {
														setAgreementError('You must agree to our terms and conditions to continue!');
													}
												}} type="checkbox"></Input>
												<span className="form-check-sign"></span>
												I accept the <a href='codecamp2019.co/terms-and-conditions'>terms and conditions</a> of the CodeCamp 2019.
                                        </Label>

											{!agreement ? <Error >{agreementError}</Error> : null}
										</FormGroup>
									</Row>
								</ModalBody>

								<div className="modal-footer">
									<Button color="danger" type="button"
										onClick={_cancel}>
										Cancel
                                    </Button>
									<Button
										color="info"
										type="button"
										onClick={_continue}
									>
										Continue
                                </Button>
								</div>
							</Modal>) :
							null}






						{/* choice modal*/}

						{formProgress == 2 ?
							(<Modal isOpen={formProgress === 2} toggle={() => setFormProgress(0)} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
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
								{applicationDataError.theme ? <Error type='theme'>{applicationDataError.theme}</Error> : null}
								<div className="modal-footer">
									<Button color="danger" type="button"
										onClick={_previous}>
										Previous
                                    </Button>
									<Button
										color="info"
										type="button"
										onClick={_continue}
									>
										Continue
                                </Button>
								</div>
							</Modal>) :
							null}


						{/* Main form modal*/}
						{formProgress == 3 ?
							(<Modal isOpen={formProgress === 3} toggle={() => setFormProgress(0)} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
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
												{applicationDataError.ideaName ? <Error >{applicationDataError.ideaName}</Error> : null}

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
												{applicationDataError.teamName ? <Error >{applicationDataError.teamName}</Error> : null}
											</FormGroup>
										</Col>
										{memberDetailForm}
										<Col lg="9" sm="11">
											<p className='aboutText' style={{ fontSize: '0.9em', marginBottom: '5px' }}>{`Upload pdf of your proposal`}</p>
											<input
												className="form-control-primary appliForm"
												style={{ fontSize: '0.9em', margin: '10px', marginTop: 0 }}
												type="file"
												name='pdf'
												onChange={_applicationDataChange}
											/>
											{applicationDataError.pdf ? <Error >{applicationDataError.pdf}</Error> : null}
										</Col>

									</Row>

								</ModalBody>
								<div className="modal-footer">
									<Button color="danger" type="button"
										onClick={_previous}>
										Previous
                                    </Button>
									<Button
										color="info"
										type="button"
										onClick={_continue}
									>
										Continue
                                </Button>
								</div>
							</Modal>) :
							null}



						{/* Final modal*/}
						{formProgress === 4 ?
							(<Modal isOpen={formProgress == 4} toggle={() => setFormProgress(0)} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
								<div className="modal-header justify-content-center">
									<button
										className="close"
										type="button"
										onClick={_cancel}
									>
										<i className="now-ui-icons ui-1_simple-remove"></i>
									</button>
									<h4 className="title title-up">Final Tips</h4>
								</div>


								<ModalBody>


									{submitLabel == 'Submit' ?
										(
											<p className="isCentered">Check your form once again if anything is wrong.</p>
										) : null}
									{submitLabel == 'Submit' ?
										(
											<p className=" blackText pureCenter">If everything is okay, You can submit the form now.</p>
										) : null}
									{submitLabel == 'Done' ?
										(
											<p className=" blackText pureCenter">Your application has been submitted and we will contact you after shortlisting. Thankyou!!</p>
										) : null}



								</ModalBody>
								<div className="modal-footer">
									<Button color="danger" type="button"
										onClick={submitLabel != 'Submit' ? _cancel : _previous}>
										{submitLabel != 'Submit' ? 'Cancel' : 'Previous'}
									</Button>
									<Button
										color="info"
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
