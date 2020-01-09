import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import { BrickBreakerGif, bbMapEditor } from "../../images";
import { EachCardWrapperDiv, ModalLink, CarouselImage } from "../styledCompProjects";

const BRICKBRAKER = () => {
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
								src={BrickBreakerGif}
								className="card-omg-top"
								style={{ maxWidth: "100%", maxHeight: "15rem" }}
								alt="Brickbreaker Clone Gif"
							/>
						</div>
						<div className="card-body">
							<div style={{ marginBottom: "15px" }}>
								<h5 className="card-title">Breakout Clone</h5>
								<p className="card-text">A unity prototype of Breakout with a map editor.</p>
								<ModalLink onClick={() => setLgProject(true)}>Learn more</ModalLink>

								<Modal
									size="lg"
									show={lgProject}
									onHide={() => setLgProject(false)}
									aria-labelledby="example-modal-sizes-title-lg"
								>
									<Modal.Header closeButton>
										<Modal.Title id="example-modal-sizes-title-lg">Breakout Clone</Modal.Title>
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
													<CarouselImage
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
												Built a React app that let's users keep track of a shopping list. The user
												can add items they need and move the items from 'Need' to "Found" and delete
												unnecessary items.
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
					</EachCardWrapperDiv>
				</div>
			</Flip>
		</div>
	);
};

export default BRICKBRAKER;
