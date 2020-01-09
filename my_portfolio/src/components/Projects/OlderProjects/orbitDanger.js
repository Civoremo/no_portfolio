import React, { useState } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import { ODgif, OD1, OD2, OD3 } from "../../images";

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

const ORBITDANGER = () => {
	const [lgProject, setLgProject] = useState(false);
	return (
		<div style={{ margin: "3px 3px" }}>
			<Flip bottom>
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
												items that are completed can be marked as completed and with a single button
												all those that were marked as complete can be removed. Items are stored in
												local storage to persist during a refresh of the site.
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
					</EachCardWrapperDiv>
				</div>
			</Flip>
		</div>
	);
};

export default ORBITDANGER;
