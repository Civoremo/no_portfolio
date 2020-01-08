import React, { useState } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import { ArchitectGif, Architect1, Architect2, Architect3, Architect4 } from "../../images";

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

const ARCHITECT = () => {
	const [lgProject, setLgProject] = useState(false);
	return (
		<Flip bottom>
			<EachCardWrapperDiv>
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
							src={ArchitectGif}
							style={{ maxWidth: "100%", maxHeight: "15rem" }}
							className="card-omg-top"
							alt="..."
						/>
					</div>
					<div className="card-body">
						<div style={{ marginBottom: "15px" }}>
							<h5 className="card-title">Architect Site</h5>
							<p className="card-text">Responsive site for a make-shift architect firm.</p>
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
									<Modal.Title id="example-modal-sizes-title-lg">Architect Site</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
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
												<img src={Architect1} className="d-block" alt="first slide" />
											</div>
											<div className="carousel-item" style={{ marginRight: "0px", width: "auto" }}>
												<img src={Architect2} className="d-block" alt="second slide" />
											</div>
											<div className="carousel-item" style={{ marginRight: "0px", width: "auto" }}>
												<img src={Architect3} className="d-block" alt="third slide" />
											</div>
											<div className="carousel-item" style={{ marginRight: "0px", width: "auto" }}>
												<img src={Architect4} className="d-block" alt="fourth slide" />
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
											Recreated a pixel-perfect version of an architect firm's site. Design files
											were provided along with the content and the challenge was to build the site
											according to the designs.
										</p>
										<p>
											The services page contains tabs that will change the content based on the
											button clicked.
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
												<span style={{ margin: "0 5px" }}>HTML 5</span>
												<span style={{ margin: "0 5px" }}>CSS 3</span>
												<span style={{ margin: "0 5px" }}>LESS</span>
												<span style={{ margin: "0 5px" }}>Responsive</span>
											</div>
										</div>
									</div>
								</Modal.Body>
							</Modal>
						</div>
						<div className="card-body" style={{ borderTop: "1px solid rgba(0,0,0,.125)" }}>
							<a
								href="https://smith-jones-architect.netlify.com/"
								className="card-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Live
							</a>
							<a
								href="https://github.com/Civoremo/User-Interface-Project-Week"
								className="card-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github
							</a>
						</div>
					</div>
				</div>
			</EachCardWrapperDiv>
		</Flip>
	);
};

export default ARCHITECT;
