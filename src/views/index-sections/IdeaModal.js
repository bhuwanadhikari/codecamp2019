import React, { useEffect } from "react";
import { storage } from '../../firebase';

// react plugins that creates an input with a date picker
import Datetime from "react-datetime";
import axios from "axios";

import theme1 from '../../assets/img/theme1.png';
import theme2 from '../../assets/img/theme2.png';
import theme3 from '../../assets/img/theme3.png';
import funnySpinner from '../../assets/img/funnyspinner.gif';
import { isEmpty } from "../../validation/validate";


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
axios.defaults.withCredentials = true;

function Javascript(props) {

	const wholePath = window.location.href;

	const splitArray = wholePath.split('/');
	const requiredValue = splitArray[splitArray.length - 1];




	const [formProgress, setFormProgress] = React.useState(0);
	const [choice, setChoice] = React.useState('');
	let [submitLabel, setSubmitLabel] = React.useState('Submit');
	const [submitFailed, setSubmitFailed] = React.useState('false');

	let [applicationData, setApplicationData] = React.useState({
		ideaName: '',
		teamName: '',
		theme: '',
		pdf: '',
		pdfUrl: '',
		github: '',
		pdfLink: ''
	});

	let memberArr = [{
		photo: '',
		photoLink: '',
		photoUrl: '',
		name: '',
		phone: '',
		size: '',
		address: '',
		college: '',
		email: ''
	}, {
		photo: '',
		photoUrl: '',
		photoLink: '',
		name: '',
		phone: '',
		size: '',
		address: '',
		college: '',
		email: ''
	}, {
		photo: '',
		photoUrl: '',
		photoLink: '',
		name: '',
		phone: '',
		size: '',
		address: '',
		college: '',
		email: ''
	}];

	let [memberDataError, setMemberDataError] = React.useState([{}, {}, {}]);
	let [applicationDataError, setApplicationDataError] = React.useState({});

	let [membersData, setMembersData] = React.useState(memberArr);
	const [time, setTime] = React.useState(new Date().getTime());

	let [agreement, setAgreement] = React.useState(false);
	let [agreementError, setAgreementError] = React.useState('');
	const [uploadCount, setUploadCount] = React.useState(0);


	const { trigger } = props;


	React.useEffect(() => {
		if (requiredValue === '#register') {
			console.log('Did we hit the target')
			setFormProgress(1);
		}
	}, []);

	React.useEffect(() => {
		console.log("Form progress is", formProgress);
	}, [formProgress]);


	React.useEffect(() => {
		setFormProgress(trigger ? 1 : 0)
	}, [trigger]);


	React.useEffect(() => {
		if (!membersData[2].photo) {

		} else if (membersData[2].photo) {

		}
	}, [uploadCount]);

	const toBase64 = file => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});


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

			console.log('is appli data valid', isValid);
			console.log('appli data errors', errors);

			console.log('is member data valid', isMemberDataValid);
			console.log('member data errors', memberDataError);

			if (!isValid || !isMemberDataValid) {
				console.log('is things working?')
				if (!isValid) {
					console.log("erros are", errors);
					setApplicationDataError({ ...applicationDataError, ...errors });
				}
				if (!isMemberDataValid) {
					console.log("member errors are", memberErrors);
					const tempObjArr = [{}, {}, {}];
					memberDataError.forEach((errObj, index) => {
						tempObjArr[index] = { ...memberDataError, ...memberErrors[index] }
					});
					setMemberDataError(tempObjArr);
				}

				if (isMemberDataValid) {
					setMemberDataError([{}, {}, {}]);
				}

				if (isValid) {
					setApplicationDataError({});
				}


				return;

			}
		}
		setFormProgress(formProgress + 1);
	}

	const _cancel = () => {
		setFormProgress(0);
		props._bringForm(false);
	}

	const _previous = () => {
		setFormProgress(formProgress - 1);
	}

	const _choice = (val) => {
		setChoice(val);
		setApplicationData({ ...applicationData, theme: val });
		setApplicationDataError({ ...applicationDataError, theme: '' })
	}

	const _submit = async () => {


		if (submitLabel === 'Done') {
			await setFormProgress(0);
			props._bringForm(false);
			await setSubmitLabel('Submit');
			return;
		}


		if (submitLabel === 'Submit' || submitLabel === 'Re-Submit') {
			await setSubmitLabel('Submitting');














			try {




				let photoUploadStatus = false;
				const d1 = new Date().toISOString();
				const uploadTask = storage.ref(`pdfs/${applicationData.pdf.name + d1}`).put(applicationData.pdf);

				uploadTask.on(
					"state_changed",
					snapshot => {
						// progress function ...
					},
					error => {
						photoUploadStatus = photoUploadStatus && false;
						// Error function ...
						console.log('error in uploaidn pdf to the firebase', error);
					},
					async () => {
						// complete function ...
						await storage
							.ref("pdfs")
							.child(applicationData.pdf.name + d1)
							.getDownloadURL()
							.then(async url => {

								console.log('pdf is file now', applicationData.pdf);
								const tempPdfUrl = url;
								await setApplicationData({ ...applicationData, pdf: url });
								console.log('pdf is link now', applicationData.pdfUrl);

								console.log("this is url of pdf", url);
								//----------------------------------------------------------------------------------------------------------------------

								let tempPhoto = membersData[0].photo;

								var d2 = new Date().toISOString();
								const uploadPhotoTask1 = storage.ref(`photos/${tempPhoto.name + d2}`).put(tempPhoto);
								uploadPhotoTask1.on(
									"state_changed",
									snapshot => {
										// progress function ...
									},
									error => {
										photoUploadStatus = photoUploadStatus && false;

										// Error function ...
										console.log('error in uploaidn pdf to the firebase', error);
									},
									async () => {
										// complete function ...

										//upload first user photo
										await storage
											.ref("photos")
											.child(membersData[0].photo.name + d2)
											.getDownloadURL()
											.then(async url => {
												photoUploadStatus = photoUploadStatus && true;
												const tempArray = membersData;
												tempArray[0].photo = url;
												await setMembersData(tempArray);



												console.log("this is url of user photo", url);


												//----------------------------------------------------------------------------------------------------------------------

												let tempPhoto = membersData[1].photo;

												var d2 = new Date().toISOString();
												const uploadPhotoTask1 = storage.ref(`photos/${tempPhoto.name + d2}`).put(tempPhoto);
												uploadPhotoTask1.on(
													"state_changed",
													snapshot => {
														// progress function ...
													},
													error => {
														photoUploadStatus = photoUploadStatus && false;

														// Error function ...
														console.log('error in uploaidn pdf to the firebase', error);
													},
													async () => {
														// complete function ...

														await storage
															.ref("photos")
															.child(membersData[1].photo.name + d2)
															.getDownloadURL()
															.then(async url => {
																photoUploadStatus = photoUploadStatus && true;
																const tempArray = membersData;
																tempArray[1].photo = url;
																await setMembersData(tempArray);

																console.log("this is url of user photo", url);
																//1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111




																if (membersData[2].photo) {
																	let tempPhoto = membersData[2].photo;

																	var d2 = new Date().toISOString();
																	const uploadPhotoTask1 = storage.ref(`photos/${tempPhoto.name + d2}`).put(tempPhoto);
																	uploadPhotoTask1.on(
																		"state_changed",
																		snapshot => {
																			// progress function ...
																		},
																		error => {
																			photoUploadStatus = photoUploadStatus && false;

																			// Error function ...
																			console.log('error in uploaidn pdf to the firebase', error);
																		},
																		async () => {
																			// complete function ...

																			await storage
																				.ref("photos")
																				.child(membersData[2].photo.name + d2)
																				.getDownloadURL()
																				.then(async url => {
																					photoUploadStatus = photoUploadStatus && true;
																					const tempArray = membersData;
																					tempArray[2].photo = url;
																					await setMembersData(tempArray);
																					// console.log("Applicaton Data is", dataToBePosted)
																					//2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
																					// let dataToBePosted;

																					// if (isEmpty(membersData[2].name) || isEmpty(membersData[2].email) || isEmpty(membersData[2].phone)) {
																					// 	dataToBePosted = { ...applicationData, participants: [membersData[0], membersData[1]] };
																					// } else {
																					// 	dataToBePosted = { ...applicationData, participants: membersData };

																					// }



																					// console.log("Applicaton Data is", dataToBePosted)

																					// const campData = new FormData();



																					// const members = dataToBePosted.participants;


																					// const fieldArray = ['name', 'size', 'phone', 'address', 'college', 'email', 'photo'];

																					// members.forEach((member, memberIndex) => {
																					// 	fieldArray.forEach((field, fieldIndex) => {
																					// 		campData.append(`${field}${memberIndex}`, member[field]);
																					// 	})
																					// })

																					// campData.append('ideaName', dataToBePosted.ideaName);
																					// campData.append('teamName', dataToBePosted.teamName);
																					// campData.append('theme', dataToBePosted.theme);
																					// campData.append('pdf', dataToBePosted.pdfUrl);
																					// campData.append('github', dataToBePosted.github);

																					// for (let value of campData.values()) {
																					// 	console.log(value, ' in the damp data');
																					// }

																					//
																					console.log("Data to be posted are", { ...applicationData, pdfUrl: tempPdfUrl, participants: [membersData[0], membersData[1], membersData[2]] })

																					// axios.post('https://codecamp2019.herokuapp.com/teams/', campData)
																					axios.post('http://192.168.100.9:8000/teams/', { ...applicationData, pdfUrl: tempPdfUrl, participants: [membersData[0], membersData[1], membersData[2]] })
																						.then((res) => {
																							console.log("Successfully submitted here");
																							console.log("Data submitted is", res.data);
																							setSubmitLabel('Done')
																							setSubmitFailed(false);

																						}).catch((err) => {
																							console.log("Error has been occured", err);
																							setSubmitLabel('Re-Submit');
																							setSubmitFailed(true);
																						});













																				});
																		}
																	)
																} else {


																	//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
																	let dataToBePosted;

																	// if (isEmpty(membersData[2].name) || isEmpty(membersData[2].email) || isEmpty(membersData[2].phone)) {
																	// 	dataToBePosted = { ...applicationData, participants: [membersData[0], membersData[1]] };
																	// } else {
																	// 	dataToBePosted = { ...applicationData, participants: membersData };

																	// }

																	// const campData = new FormData();



																	// const members = dataToBePosted.participants;


																	// const fieldArray = ['name', 'size', 'phone', 'address', 'college', 'email', 'photo'];

																	// members.forEach((member, memberIndex) => {
																	// 	fieldArray.forEach((field, fieldIndex) => {
																	// 		campData.append(`${field}${memberIndex}`, member[field]);
																	// 	})
																	// })



																	// console.log("Applicaton Data is", dataToBePosted)

																	// campData.append('ideaName', dataToBePosted.ideaName);
																	// campData.append('teamName', dataToBePosted.teamName);
																	// campData.append('theme', dataToBePosted.theme);
																	// campData.append('pdf', dataToBePosted.pdfUrl);
																	// campData.append('github', dataToBePosted.github);

																	// for (let value of campData.values()) {
																	// 	console.log(value, ' in the damp data');
																	// }

																	// //
																	console.log("Data to be posted are", { ...applicationData, pdfUrl: tempPdfUrl, participants: [membersData[0], membersData[1]] })

																	// axios.post('https://codecamp2019.herokuapp.com/teams/', campData)
																	axios.post('http://192.168.100.9:8000/teams/', { ...applicationData, pdfUrl: tempPdfUrl, participants: [membersData[0], membersData[1]] })
																		.then((res) => {
																			console.log("Successfully submitted here");
																			console.log("Data submitted is", res.data);
																			setSubmitLabel('Done')
																			setSubmitFailed(false);

																		}).catch((err) => {
																			console.log("Error has been occured", err);
																			setSubmitLabel('Re-Submit');
																			setSubmitFailed(true);
																		});
																}

															});
													}
												)
											});
									}
								)
							});
					}
				);


			} catch (err) {
				console.log("Error has been occured in api things", err);
				setSubmitLabel('Re-Submit');
				setSubmitFailed(true);
			}

		}
	}


	console.log("Updated data are", { ...applicationData, participants: [membersData[0], membersData[1], membersData[2]] })


	const memberDetailForm = membersData.map((member, index) => {
		return (
			<React.Fragment key={index}>
				<Col md='4'>

					<p style={{ fontSize: '0.9em', marginTop: '20px', fontWeight: 'bold' }}>Details of Member {' '}{index + 1}{index === 2 ? '(Optional)' : null}</p>

					<p className='ralewayFonted' style={{ fontSize: '0.9em', marginBottom: '0px' }}>{`Upload photo of Member ${index + 1}*`}</p>
					<input
						className="form-control-primary appliForm"
						style={{ fontSize: '0.9em', margin: '15px', marginLeft: '2px', marginTop: '5px', }}
						type="file"
						name='photo'
						onChange={(e) => { _memberDataChange(e, index, 'photo') }}
					/>
					{memberDataError[index].photo ? <Error>{memberDataError[index].photo}</Error> : null}
					<FormGroup>
						<Input
							className="form-control-primary appliForm"
							placeholder="Name of Member*"
							type="text"
							defaultValue={member.name}
							onChange={(e) => { _memberDataChange(e, index, 'name') }}
						></Input>
						<Error>{memberDataError[index].name}</Error>
					</FormGroup>
					<FormGroup>
						<Input
							className="form-control-primary appliForm"
							placeholder="Email of Member*"
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
							defaultValue='0'
						>
							<option value='0' disabled>Choose T-shirt Size*</option>
							<option value="SM">SM</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
						</select>
						{memberDataError[index].size ? <Error>{memberDataError[index].size}</Error> : null}
					</FormGroup>
					<FormGroup>
						<Input
							className="form-control-primary appliForm"
							placeholder="Phone No*"
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

				</Col>
			</React.Fragment>
		)
	})


	// console.log("application data is", applicationData);

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
						{formProgress === 1 ?
							(<Modal isOpen={formProgress === 1} toggle={() => {
								setFormProgress(0);
								props._bringForm(false);
							}
							} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
								<div className="modal-header justify-content-center">
									<button
										className="close"
										type="button"
										onClick={_cancel}
									>
										<i className="now-ui-icons ui-1_simple-remove"></i>
									</button>
									<h4 className="title title-up">CodeCamp 2019</h4>
								</div>


								<ModalBody>
									<p className="isCentered aboutText" style={{ fontSize: '0.9em' }}>We suggest you first to read the <a href='https://drive.google.com/file/d/1hDigaxmRpgLuDje5uWX8moiY3ymqlP9B/view' target="_blank">CodeCamp 2019 Booklet</a> before you continue to fill the form.</p>
									<p className="leftAligned aboutText" style={{ maxHeight: '50vh', margin: 'auto', maxWidth: '800px' }}>Nepal needs youth with inspiring ideas and technical knowledge to create innovative solutions in many contemporary fields. CodeCamp hopes to be a platform to bridge developers with the industry to develop such ideas in Rural Tourism, Public Health and e-Governance. Do you think you have what it takes to bring change?
										Submit Your Ideas
									</p>
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
												I accept the <a href='https://drive.google.com/file/d/1BDRXvJz3MKtJHjA9JwJeuR6R972ucf5j/view' target="_blank">terms and conditions</a> of the CodeCamp 2019.
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

						{formProgress === 2 ?
							(<Modal isOpen={formProgress === 2} toggle={() => {
								setFormProgress(0);
								props._bringForm(false);
							}} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
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
						{formProgress === 3 ?
							(<Modal isOpen={formProgress === 3} toggle={() => {
								setFormProgress(0);
								props._bringForm(false);
							}} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
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
													placeholder='Title of your Idea*'
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
													placeholder="Name of your Team*"
													type="text"
													name="teamName"
													defaultValue={applicationData.teamName}
													onChange={_applicationDataChange}
												></Input>
												{applicationDataError.teamName ? <Error >{applicationDataError.teamName}</Error> : null}
											</FormGroup>
										</Col>
										<Col lg="9" sm="11">
											<FormGroup className="">
												<Input
													className="form-control-success appliForm"
													placeholder='Github link of Leader*'
													type="text"
													name="github"
													defaultValue={applicationData.github}
													onChange={_applicationDataChange}
												></Input>
												{applicationDataError.github ? <Error >{applicationDataError.github}</Error> : null}

											</FormGroup>
										</Col>
										{memberDetailForm}
										<Col lg="9" sm="11">
											<p className='aboutText' style={{ fontSize: '0.9em', marginBottom: '5px' }}>Upload pdf of your proposal.* See <a href="https://drive.google.com/file/d/1dwFlGwLBALZ8ZprGYGdRQ04uMZZYoyS1/view?usp=sharing" target="_blank">Proposal Format!</a></p>
											<input
												className="form-control-primary appliForm"
												style={{ fontSize: '0.9em', margin: '15px', marginTop: 0 }}
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
							(<Modal isOpen={formProgress === 4} toggle={() => {
								setFormProgress(0)
								props._bringForm(false);
							}
							} style={{ margin: '20px auto', border: '20px solid transparent', maxWidth: '800px' }}>
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



									{submitLabel === 'Submit' && submitFailed !== true ?
										(
											<p className=" blackText pureCenter">Make sure that everything you entered is okay. If yes, You can submit the form now.</p>
										) : null}
									{submitLabel === 'Done' ?
										(
											<p className=" blackText pureCenter">Your application has been submitted and we will contact you soon after shortlisting. Thankyou!!</p>
										) : null}
									{submitFailed === true && submitLabel !== 'Submitting' && submitLabel !== 'Done' ?
										(
											<p className=" blackText pureCenter">Something went wrong, Please try again later or Reload the page and Refill the form! For more, mail us at contact@codecamp2019.co</p>
										) : null}
									{submitLabel === 'Submitting' ?
										(<div>
											<p className=" blackText pureCenter">Processing your form. Be Patient!!</p>
											<h6 style={{ margin: '10px auto', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
												<img style={{ height: '100px', alignSelf: 'center', marginLeft: 'calc(50% - 50px)' }} src={funnySpinner} />
											</h6>

										</div>
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
