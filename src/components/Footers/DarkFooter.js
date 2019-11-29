/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Col, Row } from "reactstrap";
import { validateSendMessageData } from '../../validation/validate';
import axios from "axios";




function DarkFooter() {

	const [pageCount, setPageCount] = React.useState(null);
	const [message, setMessage] = React.useState({
		name: '',
		message: '',
		email: '',
	});
	const [messageErr, setMessageErr] = React.useState({});

	const [sent, setSent] = React.useState('inactive');



	React.useEffect(() => {

		let data = {
			time: new Date()
		}

		data.time = data.time.toISOString()

		console.log(data, 'what is thime now');
		console.log('---------------------------');


		(async () => {
			await axios.get('https://codecamp2019.herokuapp.com/count/')
				.then((res) => {
					setPageCount(res.data);
					console.log("successfully received the page count", res.data);
				}).catch((err) => {
					console.log(err, 'error  in the get of data');
				});


			await setTimeout(async () => {
				await axios.post('https://codecamp2019.herokuapp.com/count/', data)
					.then((res) => {
						setPageCount(res.data);
						console.log("successfully page count increased", res.data);
					}).catch((err) => {
						console.log(err, 'is the error in the page count increase');
					});
			}, 4000)


		})();

	}, []);


	const _change = (e) => {
		setMessage({ ...message, [e.target.name]: e.target.value });
		setMessageErr({ ...messageErr, [e.target.name]: '' })
		setSent('inactive');
	}

	const _cancel = (e) => {
		setMessage({
			message: '',
			name: '',
			email: ''
		})

		setSent('inactive');
	}

	const _send = () => {

		(async () => {
			const { isMessageDataValid, errors } = validateSendMessageData(message);

			console.log("errors founda re", errors);

			await setMessageErr({ ...errors });

			if (isMessageDataValid) {
				console.log('submitted');

				await axios.post('https://codecamp2019.herokuapp.com/sendmessage/', message)
					.then((res) => {
						console.log("Message sent successfully ", res.data)
						setSent('sent');

					}).catch((err) => {
						console.log(err, 'error  in the get of data');
						setSent('notsent');
					});



				await setMessage({
					message: '',
					name: '',
					email: ''
				})
			} else {
				console.log('cannot be submitted');
			}
		})()


	}

	return (
		<footer className="footer" data-background-color="black">
			<Container>
				<Row>
					<Col md={6}>
						<div className="container-venue">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4970.147009041778!2d83.9729951254231!3d28.255137701438922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595006d6a3d97%3A0x19ff5adc4b5b8efe!2sRIC%20building%2C%20WRC!5e0!3m2!1sen!2snp!4v1574920018635!5m2!1sen!2snp" width="100%" height="430" frameborder="0" style={{ border: 0, margin: '40px 0 0', padding: '10px' }} allowfullscreen=""></iframe>
						</div>
					</Col>
					<Col md={6}>
						<div className="container-contact">
							<div className="screen">
								<div className="screen-header">

								</div>
								<div className="screen-body">
									<div className="screen-body-item left">
										<div className="app-title">
											<span>CONTACT US</span>
										</div>
										<div className="app-contact">CONTACT INFO : +977 9864420363</div>
										<div className="app-contact">contact@codecamp2019.co</div>
									</div>
									<div className="screen-body-item">
										<div className="app-form">
											<div className="app-form-group">
												<input
													className="app-form-control"
													name='name'
													placeholder="NAME"
													onChange={_change}
													value={message.name}
													style={{ borderColor: messageErr.name ? 'red' : '#6b6b6b' }}
												/>
											</div>
											<div className="app-form-group">
												<input
													className="app-form-control"
													name='email'
													placeholder="EMAIL"
													onChange={_change}
													value={message.email}
													style={{ borderColor: messageErr.email ? 'red' : '#6b6b6b' }}
												/>
											</div>

											<div className="app-form-group message">
												<input
													className="app-form-control"
													name='message'
													placeholder="MESSAGE"
													onChange={_change}
													value={message.message}
													style={{ borderColor: messageErr.message ? 'red' : '#6b6b6b' }}
												/>
											</div>
											{
												sent === 'sent' ?
													(<div style={{ color: '#2ca8ff', fontSize: '0.9em', }}>Message Sent Successfully!</div>) :
													null}
											{sent === 'notsent' ?
												(<div style={{ color: 'orangered', fontSize: '0.9em', }}>Failed! Try again.</div>) :
												null
											}

											<div className="app-form-group buttons">
												<button className="app-form-button cancel-button" onClick={_cancel}>CANCEL</button>
												<button className="app-form-button" onClick={_send}>SEND</button>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</Col>
				</Row>
				<nav style={{ width: '100%' }}>
					<ul style={{
						display: 'flex',
						justifyContent: 'space-around'
					}}>
						<li className="footerContent">
							<a
								href="https://www.codecamp2019.co"
								target="_blank"
							>
								CodeCamp 2019
                  </a>
						</li>

						<li className="ralewayFonted footerContent" style={{ paddingLeft: '0', color: 'lavenderblush', fontSize: '0.9em' }}>
							Page Visits: {pageCount} times
              </li>
					</ul>
					<div className="authorContent"  >
						Hello Worlded By: {" "}
						<a
							href="https://bhuwanadhikari.com.np"
							target="_blank"
							style={{ color: 'silver' }}
						>
							Bhuwan Adhikari
              </a>

					</div>
				</nav>

			</Container>
		</footer>
	);
}

export default DarkFooter;
