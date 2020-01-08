import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";

import * as ProjectImages from "./images";

// import ARQ from "./Projects/RecentProjects/arq";
// import PPSR from "./Projects/RecentProjects/ppsr";
// import LUNCHER from "./Projects/RecentProjects/luncher";
import * as ProjectComponents from "./Projects/indexProjects";

const { ARQ, PPSR, LUNCHER, TETRIS, PORTFOLIO, BACKYARDSPORTLEAGUE, ARCHITECT } = ProjectComponents;

const {
	NoteGif,
	Note1,
	Note2,
	Note3,
	Note4,
	ODgif,
	OD1,
	OD2,
	OD3,
	QuizzGif,
	Quizz1,
	Quizz2,
	Quizz3,
	Quizz4,
	BrickBreakerGif,
	bbMapEditor,
} = ProjectImages;

const ProjectsDiv = styled.div``;

const CardContainerDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 10px 0 40px 0;
	margin-bottom: 80px;
`;

const CardContainerOlderProjectsDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 10px 0 40px 0;
	margin-bottom: 10px;
`;

const EachCardWrapperDiv = styled.div`
	/* position: absolute; */
	position: relative;

	:hover {
		box-shadow: 5px 5px 5px #dadada;
		z-index: 10;
	}
`;

const ModalLink = styled.a`
	color: #007bff;

	:hover {
		cursor: pointer;
	}
`;

const Projects = () => {
	// const [lgProject1Show, setLgProject1Show] = useState(false);
	// const [lgProject2Show, setLgProject2Show] = useState(false);
	// const [lgProject3Show, setLgProject3Show] = useState(false);
	// const [lgOlderProject1Show, setLgOlderProject1Show] = useState(false);
	// const [lgOlderProject2Show, setLgOlderProject2Show] = useState(false);
	// const [lgOlderProject3Show, setLgOlderProject3Show] = useState(false);
	// const [lgOlderProject4Show, setLgOlderProject4Show] = useState(false);
	const [lgOlderProject5Show, setLgOlderProject5Show] = useState(false);
	const [lgOlderProject6Show, setLgOlderProject6Show] = useState(false);
	const [lgOlderProject7Show, setLgOlderProject7Show] = useState(false);
	const [lgOlderProject8Show, setLgOlderProject8Show] = useState(false);

	function showMoreProjectsPart2() {
		let projectsDiv = document.getElementById("olderProjectsPart2");
		let showMoreProjectsLink = document.getElementById("showMoreProjectsLink1");
		if (projectsDiv.style.display === "none") {
			showMoreProjectsLink.style.display = "none";
			projectsDiv.style.display = "block";
		} else {
			projectsDiv.style.display = "none";
			showMoreProjectsLink.style.display = "block";
		}
	}

	return (
		<ProjectsDiv className="projects">
			<Container>
				<h2 style={{ textAlign: "left", margin: "120px 70px 30px 70px", fontFamily: "Nunito" }}>
					Recent Projects
				</h2>
				<CardContainerDiv>
					<ARQ />
					<PPSR />
					<LUNCHER />
				</CardContainerDiv>
			</Container>

			{/* OLDER PROJECT SECTION */}

			<Container>
				<h4 style={{ textAlign: "left", margin: "80px 70px 30px 70px", fontFamily: "Nunito" }}>
					Older Projects
				</h4>
				<CardContainerOlderProjectsDiv>
					<TETRIS />
					<PORTFOLIO />
					<BACKYARDSPORTLEAGUE />
					<ARCHITECT />
				</CardContainerOlderProjectsDiv>
				<div
					id="showMoreProjectsLink1"
					onClick={() => showMoreProjectsPart2()}
					style={{ color: "#007bff", cursor: "pointer", display: "block", marginBottom: "64px" }}
				>
					Show more
				</div>

				<div id="olderProjectsPart2" style={{ display: "none" }}>
					<CardContainerOlderProjectsDiv>
						{/* LAMBDA NOTES */}

						<Flip top>
							<div className="card" style={{ width: "14rem", margin: "3px 3px" }}>
								<EachCardWrapperDiv>
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											height: "250px",
										}}
									>
										<img
											src={NoteGif}
											className="card-omg-top"
											style={{ maxWidth: "100%", maxHeight: "15rem" }}
											alt="..."
										/>
									</div>
									<div className="card-body">
										<div style={{ marginBottom: "15px" }}>
											<h5 className="card-title">Note App</h5>
											<p className="card-text">Note taking app with CRUD operations.</p>
											<ModalLink
												onClick={() => setLgOlderProject5Show(true)}
												style={{ color: "#007bff" }}
											>
												Learn more
											</ModalLink>

											<Modal
												size="lg"
												show={lgOlderProject5Show}
												onHide={() => setLgOlderProject5Show(false)}
												aria-labelledby="example-modal-sizes-title-lg"
											>
												<Modal.Header closeButton>
													<Modal.Title id="example-modal-sizes-title-lg">Note App</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<div
														id="carouselExampleControls"
														className="carousel slide"
														data-ride="carousel"
													>
														<div
															className="carousel-inner"
															style={{
																backgroundColor: "#222",
																display: "flex",
																justifyContent: "center",
																alignItems: "center",
																height: "400px",
															}}
														>
															<div
																className="carousel-item active"
																style={{ marginRight: "0px", width: "auto" }}
															>
																<img src={Note1} className="d-block" alt="Lambda Notes" />
															</div>
															<div
																className="carousel-item"
																style={{ marginRight: "0px", width: "auto" }}
															>
																<img src={Note2} className="d-block" alt="Lambda Notes Save" />
															</div>
															<div
																className="carousel-item"
																style={{ marginRight: "0px", width: "auto" }}
															>
																<img src={Note3} className="d-block" alt="Lambda Notes Filter" />
															</div>
															<div
																className="carousel-item"
																style={{ marginRight: "0px", width: "auto" }}
															>
																<img src={Note4} className="d-block" alt="Lambda Notes Delete" />
															</div>
														</div>
														<a
															className="carousel-control-prev"
															href="#carouselExampleControls"
															role="button"
															data-slide="prev"
														>
															<span
																className="carousel-control-prev-icon"
																aria-hidden="true"
															></span>
															<span className="sr-only">Previous</span>
														</a>
														<a
															className="carousel-control-next"
															href="#carouselExampleControls"
															role="button"
															data-slide="next"
														>
															<span
																className="carousel-control-next-icon"
																aria-hidden="true"
															></span>
															<span className="sr-only">Next</span>
														</a>
													</div>
													<div style={{ margin: "30px 20px" }}>
														<p>
															A note taking app that allows for all CRUD operations. Performed all
															API calls to a remote server that stored the created notes and kept
															track of all changes made to said note along with deleting notes. A
															search function was added to more easily look for notes.
														</p>
														<p>Site is responsive.</p>
														<div
															style={{
																display: "flex",
																alignItems: "center",
																flexWrap: "wrap",
																flexDirection: "column",
																marginTop: "40px",
																fontFamily: "Nunito",
															}}
														>
															<div style={{ fontWeight: "bold", marginBottom: "10px" }}>
																Frameworks
															</div>
															<div
																style={{
																	display: "flex",
																	justifyContent: "center",
																	flexWrap: "wrap",
																}}
															>
																<span style={{ margin: "0 5px" }}>React</span>
																<span style={{ margin: "0 5px" }}>Redux</span>
																<span style={{ margin: "0 5px" }}>Javascript</span>
																<span style={{ margin: "0 5px" }}>HTML 5</span>
																<span style={{ margin: "0 5px" }}>CSS 3</span>
																<span style={{ margin: "0 5px" }}>Less</span>
															</div>
														</div>
													</div>
												</Modal.Body>
											</Modal>
										</div>
										<div className="card-body" style={{ borderTop: "1px solid rgba(0,0,0,.125)" }}>
											<a
												href="https://lambda-notes.netlify.com/"
												className="card-link"
												target="_blank"
												rel="noopener noreferrer"
											>
												Live
											</a>
											<a
												href="https://github.com/Civoremo/front-end-project-week"
												className="card-link"
												target="_blank"
												rel="noopener noreferrer"
											>
												Github
											</a>
										</div>
									</div>
								</EachCardWrapperDiv>
							</div>
						</Flip>

						{/* DANGER IN ORBIT */}

						<Flip bottom>
							<div className="card" style={{ width: "14rem", margin: "3px 3px" }}>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										height: "250px",
									}}
								>
									<img
										src={ODgif}
										className="card-omg-top"
										style={{ maxWidth: "100%", maxHeight: "15rem" }}
										alt="Orbit Danger Gif"
									/>
								</div>
								<div className="card-body">
									<div style={{ marginBottom: "15px" }}>
										<h5 className="card-title">ToDo App</h5>
										<p className="card-text">A ToDo list with search functionality.</p>
										<ModalLink
											onClick={() => setLgOlderProject6Show(true)}
											style={{ color: "#007bff" }}
										>
											Learn more
										</ModalLink>

										<Modal
											size="lg"
											show={lgOlderProject6Show}
											onHide={() => setLgOlderProject6Show(false)}
											aria-labelledby="example-modal-sizes-title-lg"
										>
											<Modal.Header closeButton>
												<Modal.Title id="example-modal-sizes-title-lg">ToDo App</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												<div
													id="carouselExampleControls"
													className="carousel slide"
													data-ride="carousel"
												>
													<div
														className="carousel-inner"
														style={{
															backgroundColor: "#222",
															display: "flex",
															justifyContent: "center",
															alignItems: "center",
															height: "400px",
														}}
													>
														<div
															className="carousel-item active"
															style={{ marginRight: "0px", width: "auto" }}
														>
															<img src={OD1} className="d-block" alt="OD Beginning Screen" />
														</div>
														<div
															className="carousel-item"
															style={{ marginRight: "0px", width: "auto" }}
														>
															<img src={OD2} className="d-block" alt="OD UFO Attack" />
														</div>
														<div
															className="carousel-item"
															style={{ marginRight: "0px", width: "auto" }}
														>
															<img src={OD3} className="d-block" alt="OD UFO Explosion" />
														</div>
													</div>
													<a
														className="carousel-control-prev"
														href="#carouselExampleControls"
														role="button"
														data-slide="prev"
													>
														<span className="carousel-control-prev-icon" aria-hidden="true"></span>
														<span className="sr-only">Previous</span>
													</a>
													<a
														className="carousel-control-next"
														href="#carouselExampleControls"
														role="button"
														data-slide="next"
													>
														<span className="carousel-control-next-icon" aria-hidden="true"></span>
														<span className="sr-only">Next</span>
													</a>
												</div>
												<div style={{ margin: "30px 20px" }}>
													<p>
														A ToDo app that allows the user to add items that need to be done; those
														items that are completed can be marked as completed and with a single
														button all those that were marked as complete can be removed. Items are
														stored in local storage to persist during a refresh of the site.
													</p>
													<div
														style={{
															display: "flex",
															alignItems: "center",
															flexWrap: "wrap",
															flexDirection: "column",
															marginTop: "40px",
															fontFamily: "Nunito",
														}}
													>
														<div style={{ fontWeight: "bold", marginBottom: "10px" }}>
															Frameworks
														</div>
														<div
															style={{
																display: "flex",
																justifyContent: "center",
																flexWrap: "wrap",
															}}
														>
															<span style={{ margin: "0 5px" }}>React</span>
															<span style={{ margin: "0 5px" }}>Javascript</span>
															<span style={{ margin: "0 5px" }}>HTML 5</span>
															<span style={{ margin: "0 5px" }}>CSS 3</span>
														</div>
													</div>
												</div>
											</Modal.Body>
										</Modal>
									</div>
									<div className="card-body" style={{ borderTop: "1px solid rgba(0,0,0,.125)" }}>
										<a
											href="https://todo-reactapp.netlify.com"
											className="card-link"
											target="_blank"
											rel="noopener noreferrer"
										>
											Live
										</a>
										<a
											href="https://github.com/Civoremo/React-Todo"
											className="card-link"
											target="_blank"
											rel="noopener noreferrer"
										>
											Github
										</a>
									</div>
								</div>
							</div>
						</Flip>

						{/* QUIZ BLISS */}

						<Flip top>
							<div className="card" style={{ width: "14rem", margin: "3px 3px" }}>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										height: "250px",
									}}
								>
									<img
										src={QuizzGif}
										className="card-omg-top"
										style={{ maxWidth: "100%", maxHeight: "15rem" }}
										alt="Quiz Bliss Gif"
									/>
								</div>
								<div className="card-body">
									<div style={{ marginBottom: "15px" }}>
										<h5 className="card-title">Quiz Bliss</h5>
										<p className="card-text">React app for creating and taking quizzes.</p>
										<ModalLink
											onClick={() => setLgOlderProject7Show(true)}
											style={{ color: "#007bff" }}
										>
											Learn more
										</ModalLink>

										<Modal
											size="lg"
											show={lgOlderProject7Show}
											onHide={() => setLgOlderProject7Show(false)}
											aria-labelledby="example-modal-sizes-title-lg"
										>
											<Modal.Header closeButton>
												<Modal.Title id="example-modal-sizes-title-lg">Quiz Bliss</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												<div
													id="carouselExampleControls"
													className="carousel slide"
													data-ride="carousel"
												>
													<div
														className="carousel-inner"
														style={{
															backgroundColor: "#222",
															display: "flex",
															justifyContent: "center",
															alignItems: "center",
															height: "400px",
														}}
													>
														<div
															className="carousel-item active"
															style={{ marginRight: "0px", width: "auto" }}
														>
															<img
																src={Quizz1}
																className="d-block"
																alt="Quiz Bliss Quiz Selection"
															/>
														</div>
														<div
															className="carousel-item"
															style={{ marginRight: "0px", width: "auto" }}
														>
															<img src={Quizz2} className="d-block" alt="Quiz Bliss Quiz Screen" />
														</div>
														<div
															className="carousel-item"
															style={{ marginRight: "0px", width: "auto" }}
														>
															<img src={Quizz3} className="d-block" alt="Quiz Bliss Quiz Score" />
														</div>
														<div
															className="carousel-item"
															style={{ marginRight: "0px", width: "auto" }}
														>
															<img
																src={Quizz4}
																className="d-block"
																alt="Quiz Bliss Quiz Tournament"
															/>
														</div>
													</div>
													<a
														className="carousel-control-prev"
														href="#carouselExampleControls"
														role="button"
														data-slide="prev"
													>
														<span className="carousel-control-prev-icon" aria-hidden="true"></span>
														<span className="sr-only">Previous</span>
													</a>
													<a
														className="carousel-control-next"
														href="#carouselExampleControls"
														role="button"
														data-slide="next"
													>
														<span className="carousel-control-next-icon" aria-hidden="true"></span>
														<span className="sr-only">Next</span>
													</a>
												</div>
												<div style={{ margin: "30px 20px" }}>
													<p>
														Worked with 3 other developers that developed the back-end for the app.
														I spent one week during Christmas to build the front-end.
													</p>
													<p>
														Start the app by creating an account, the app allows you to create,
														update and delete quizzes for you and others to take. It keeps track of
														your highest score for each attempted quiz along with a tournament mode
														that combines multiple quizzes into a Japorday style game. There is a
														search/filter function to sort through the maze of created quizzes.
													</p>
													<div
														style={{
															display: "flex",
															alignItems: "center",
															flexWrap: "wrap",
															flexDirection: "column",
															marginTop: "40px",
															fontFamily: "Nunito",
														}}
													>
														<div style={{ fontWeight: "bold", marginBottom: "10px" }}>
															Frameworks
														</div>
														<div
															style={{
																display: "flex",
																justifyContent: "center",
																flexWrap: "wrap",
															}}
														>
															<span style={{ margin: "0 5px" }}>React</span>
															<span style={{ margin: "0 5px" }}>Redux</span>
															<span style={{ margin: "0 5px" }}>JWT Token</span>
															<span style={{ margin: "0 5px" }}>Javascript</span>
															<span style={{ margin: "0 5px" }}>HTML 5</span>
															<span style={{ margin: "0 5px" }}>CSS 3</span>
														</div>
													</div>
												</div>
											</Modal.Body>
										</Modal>
									</div>
									<div className="card-body" style={{ borderTop: "1px solid rgba(0,0,0,.125)" }}>
										<a
											href="https://quizbliss.netlify.com/"
											className="card-link"
											target="_blank"
											rel="noopener noreferrer"
										>
											Live
										</a>
										<a
											href="https://github.com/Civoremo/Quiz_Bliss"
											className="card-link"
											target="_blank"
											rel="noopener noreferrer"
										>
											Github
										</a>
									</div>
								</div>
							</div>
						</Flip>

						{/* BRICK BREAKER */}
						<Flip bottom>
							<div className="card" style={{ width: "14rem", margin: "3px 3px" }}>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										height: "250px",
									}}
								>
									<img
										src={BrickBreakerGif}
										className="card-omg-top"
										style={{ maxWidth: "100%", maxHeight: "15rem" }}
										alt="Brickbreaker Clone Gif"
									/>
								</div>
								<div className="card-body">
									<div style={{ marginBottom: "15px" }}>
										<h5 className="card-title">Shopping Cart List</h5>
										<p className="card-text">Shopping list tracking react app.</p>
										<ModalLink
											onClick={() => setLgOlderProject8Show(true)}
											style={{ color: "#007bff" }}
										>
											Learn more
										</ModalLink>

										<Modal
											size="lg"
											show={lgOlderProject8Show}
											onHide={() => setLgOlderProject8Show(false)}
											aria-labelledby="example-modal-sizes-title-lg"
										>
											<Modal.Header closeButton>
												<Modal.Title id="example-modal-sizes-title-lg">
													Shopping Cart List
												</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												<div
													id="carouselExampleControls"
													className="carousel slide"
													data-ride="carousel"
												>
													<div
														className="carousel-inner"
														style={{
															backgroundColor: "#222",
															display: "flex",
															justifyContent: "center",
															alignItems: "center",
															height: "400px",
														}}
													>
														<div
															className="carousel-item active"
															style={{ marginRight: "0px", width: "auto" }}
														>
															<img
																src={bbMapEditor}
																className="d-block"
																alt="Brickbreaker Map Editor"
															/>
														</div>
														{/* <div
															className="carousel-item"
															style={{ marginRight: "0px", width: "auto" }}
														>
															<img src={Shopping2} className="d-block" alt="second slide" />
														</div> */}
													</div>
													<a
														className="carousel-control-prev"
														href="#carouselExampleControls"
														role="button"
														data-slide="prev"
													>
														<span className="carousel-control-prev-icon" aria-hidden="true"></span>
														<span className="sr-only">Previous</span>
													</a>
													<a
														className="carousel-control-next"
														href="#carouselExampleControls"
														role="button"
														data-slide="next"
													>
														<span className="carousel-control-next-icon" aria-hidden="true"></span>
														<span className="sr-only">Next</span>
													</a>
												</div>
												<div style={{ margin: "30px 20px" }}>
													<p>
														Built a React app that let's users keep track of a shopping list. The
														user can add items they need and move the items from 'Need' to "Found"
														and delete unnecessary items.
													</p>
													<p>Duplicate items are not allowed; it is case insensitive.</p>
													<div
														style={{
															display: "flex",
															alignItems: "center",
															flexWrap: "wrap",
															flexDirection: "column",
															marginTop: "40px",
															fontFamily: "Nunito",
														}}
													>
														<div style={{ fontWeight: "bold", marginBottom: "10px" }}>
															Frameworks
														</div>
														<div
															style={{
																display: "flex",
																justifyContent: "center",
																flexWrap: "wrap",
															}}
														>
															<span style={{ margin: "0 5px" }}>React</span>
															<span style={{ margin: "0 5px" }}>Javascript</span>
														</div>
													</div>
												</div>
											</Modal.Body>
										</Modal>
									</div>
									<div className="card-body" style={{ borderTop: "1px solid rgba(0,0,0,.125)" }}>
										<a
											href="https://shopping-list-reactapp.netlify.com/"
											className="card-link"
											target="_blank"
											rel="noopener noreferrer"
										>
											Live
										</a>
										<a
											href="https://github.com/Civoremo/shopping-cart-lists"
											className="card-link"
											target="_blank"
											rel="noopener noreferrer"
										>
											Github
										</a>
									</div>
								</div>
							</div>
						</Flip>
					</CardContainerOlderProjectsDiv>
				</div>
			</Container>
		</ProjectsDiv>
	);
};

export default Projects;
