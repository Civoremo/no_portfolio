import React, { useState } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import { QuizzGif, Quizz1, Quizz2, Quizz3, Quizz4 } from "../../images";

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

const QUIZBLISS = () => {
	const [lgProject, setLgProject] = useState(false);
	return (
		<div style={{ margin: "3px 3px" }}>
			<Flip top>
				<div className="card" style={{ width: "14rem" }}>
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
								<ModalLink onClick={() => setLgProject(true)} style={{ color: "#007bff" }}>
									Learn more
								</ModalLink>

								<Modal
									size="lg"
									show={lgProject}
									onHide={() => setLgProject(false)}
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
													<img src={Quizz1} className="d-block" alt="Quiz Bliss Quiz Selection" />
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
													<img src={Quizz4} className="d-block" alt="Quiz Bliss Quiz Tournament" />
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
												Worked with 3 other developers that developed the back-end for the app. I
												spent one week during Christmas to build the front-end.
											</p>
											<p>
												Start the app by creating an account, the app allows you to create, update
												and delete quizzes for you and others to take. It keeps track of your
												highest score for each attempted quiz along with a tournament mode that
												combines multiple quizzes into a Japorday style game. There is a
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
												<div style={{ fontWeight: "bold", marginBottom: "10px" }}>Frameworks</div>
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
					</EachCardWrapperDiv>
				</div>
			</Flip>
		</div>
	);
};

export default QUIZBLISS;
