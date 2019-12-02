import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
	Button,
	Collapse,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	UncontrolledTooltip
} from "reactstrap";
import Javascript from "../../views/index-sections/Javascript";
import IdeaModal from "../../views/index-sections/IdeaModal";

function IndexNavbar(props) {
	const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
	const [collapseOpen, setCollapseOpen] = React.useState(false);
	React.useEffect(() => {
		const updateNavbarColor = () => {
			if (
				document.documentElement.scrollTop > 399 ||
				document.body.scrollTop > 399
			) {
				setNavbarColor("");
			} else if (
				document.documentElement.scrollTop < 400 ||
				document.body.scrollTop < 400
			) {
				setNavbarColor("navbar-transparent");
			}
		};
		window.addEventListener("scroll", updateNavbarColor);
		return function cleanup() {
			window.removeEventListener("scroll", updateNavbarColor);
		};
	});




	return (
		<>

			<Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
				<Container>
					<div className="navbar-translate">
						<NavbarBrand
							href="https://codecamp2019.co"
							id="navbar-brand"
						>
							CODECAMP 2019

						</NavbarBrand>

						<button
							className="navbar-toggler navbar-toggler"
							onClick={() => {
								document.documentElement.classList.toggle("nav-open");
								setCollapseOpen(!collapseOpen);
							}}
							aria-expanded={collapseOpen}
							type="button"
						>
							<span className="navbar-toggler-bar top-bar"></span>
							<span className="navbar-toggler-bar middle-bar"></span>
							<span className="navbar-toggler-bar bottom-bar"></span>
						</button>
					</div>
					<Collapse
						className="justify-content-end"
						isOpen={collapseOpen}
						navbar
					>
						<Nav navbar>
							<NavItem>
								<NavLink
									href="#about"
									onClick={e => {
										e.preventDefault();
										document
											.getElementById("about")
											.scrollIntoView();

										document.documentElement.classList.toggle("nav-open");

									}}
								>
									<i className="now-ui-icons travel_info"></i>
									<p>About</p>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									href="#schedule"
									onClick={e => {
										e.preventDefault();
										document
											.getElementById("schedule")
											.scrollIntoView();
										document.documentElement.classList.toggle("nav-open");
									}}
								>
									<i className="now-ui-icons ui-2_time-alarm"></i>
									<p>Schedule</p>
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink
									href='#sponsors'
									onClick={e => {
										e.preventDefault();
										document
											.getElementById("sponsors")
											.scrollIntoView();

										document.documentElement.classList.toggle("nav-open");
									}}
								>
									<i className="now-ui-icons business_briefcase-24"></i>
									<p>Sponsors</p>
								</NavLink>
							</NavItem>

							{/* <UncontrolledDropdown nav>
								<DropdownToggle
									caret
									color="default"
									href="#pablo"
									nav
									onClick={e => e.preventDefault()}
								>
									<i className="now-ui-icons design_app mr-1"></i>
									<p>Get Tickets</p>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem to="/index" tag={Link}>
										<i className="now-ui-icons business_chart-pie-36 mr-1"></i>
										Check
                  				</DropdownItem>
									<DropdownItem
										href="#"
										target="_blank"
									>
										<i className="now-ui-icons design_bullet-list-67 mr-1"></i>
										Check
                  				</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown> */}
							<NavItem>


								<IdeaModal _bringForm={props._bringForm} trigger={props.trigger} />

							</NavItem>



							<NavItem>
								<NavLink
									href="#faqs"
									onClick={e => {
										e.preventDefault();
										document
											.getElementById("faqs")
											.scrollIntoView();
										document.documentElement.classList.toggle("nav-open");
									}}
								>
									<p>FAQs</p>
								</NavLink>
							</NavItem>

						</Nav>
					</Collapse>

				</Container>

			</Navbar>

		</>
	);
}

export default IndexNavbar;
