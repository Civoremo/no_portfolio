import React, { useState } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import { MineterisGif, MinetrisGO, MinetrisGP, MinetrisMM } from "../../images";

const EachCardWrapperDiv = styled.div`
	/* position: absolute; */
	position: relative;

	:hover {
		box-shadow: 5px 5px 5px #dadada;
		z-index: 10;
	}
`;

const ModalLink = styled.div`
	color: #dc3545;

	:hover {
		cursor: pointer;
	}
`;

const CarouselImage = styled.img`
	height: 400px;
`;

const TETRIS = () => {
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
								src={MineterisGif}
								style={{ maxWidth: "100%", maxHeight: "15rem" }}
								className="card-omg-top"
								alt="Tetris Clone Gif"
							/>
						</div>
						<div className="card-body">
							<div style={{ marginBottom: "15px" }}>
								<h5 className="card-title">Tetris Clone</h5>
								<p className="card-text">Tetris Clone with C# and XNA</p>
								<ModalLink onClick={() => setLgProject(true)}>Learn more</ModalLink>

								<Modal
									size="lg"
									show={lgProject}
									onHide={() => setLgProject(false)}
									aria-labelledby="example-modal-sizes-title-lg"
								>
									<Modal.Header closeButton>
										<Modal.Title id="example-modal-sizes-title-lg">Tetris Clone</Modal.Title>
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
														style={{ width: "60%", margin: "auto" }}
														src={MinetrisMM}
														className="d-block"
														alt="Minetris Main Menu"
													/>
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<CarouselImage
														style={{ width: "60%", margin: "auto" }}
														src={MinetrisGP}
														className="d-block"
														alt="Minetris Gameplay"
													/>
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<CarouselImage
														style={{ width: "60%", margin: "auto" }}
														src={MinetrisGO}
														className="d-block"
														alt="Minetris Game Over"
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
												First attempt at making a game from scratch after learning the basics of C#
												and the XNA framework.
											</p>
											<p>
												Having built a few simple windows applications before; I had stubled across
												the XNA framework from Microsoft, which allowed developers to build games
												and apps for their phones and the Xbox.
											</p>
											<p>
												The game is in all essence Tetris and features a particle system and a high
												score board. The speed of falling pieces increases as lines are cleared, and
												a bonus score is awarded when Tetris (clearing 4 lines) is made.
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
													<span style={{ margin: "0 5px" }}>C#</span>
													<span style={{ margin: "0 5px" }}>XNA</span>
												</div>
											</div>
										</div>
									</Modal.Body>
								</Modal>
							</div>
							<div className="card-body" style={{ borderTop: "1px solid rgba(0,0,0,.125)" }}>
								<a
									href="https://github.com/Civoremo/MineTris/tree/master/MineTris/MineTris"
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

export default TETRIS;
