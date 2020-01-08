import React, { useState } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import { BSLgif, BSLuser, BSLgame, BSLpost } from "../../images";

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

const BACKYARDSPORTLEAGUE = () => {
	const [lgProject, setLgProject] = useState(false);
	return (
		<Flip top>
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
							src={BSLgif}
							style={{ maxWidth: "100%", maxHeight: "15rem" }}
							className="card-omg-top"
							alt="Backyard Sports League Playground Gif"
						/>
					</div>
					<div className="card-body">
						<div style={{ marginBottom: "15px" }}>
							<h5 className="card-title">Backyard Sport League GraphQL</h5>
							<p className="card-text">API for organizing sports leagues.</p>
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
									<Modal.Title id="example-modal-sizes-title-lg">Lottery Luck</Modal.Title>
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
												<img src={BSLuser} className="d-block" alt="BSL Playground User Query" />
											</div>
											<div className="carousel-item" style={{ marginRight: "0px", width: "auto" }}>
												<img src={BSLgame} className="d-block" alt="BSL Playground Game Query" />
											</div>
											<div className="carousel-item" style={{ marginRight: "0px", width: "auto" }}>
												<img
													src={BSLpost}
													className="d-block"
													alt="BSL Playground League Mutation"
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
									<div style={{ border: "1px solid red", margin: "30px 20px" }}>
										<p>
											Some text here with a more detailed explanation Some text here with a more
											detailed explanation Some text here with a more detailed explanation Some text
											here with a more detailed explanation Some text here with a more detailed
											explanation Some text here with a more detailed explanation Some text here
											with a more detailed explanation Some text here with a more detailed
											explanation
										</p>
										<p>
											Some text here with a more detailed explanation Some text here with a more
											detailed explanation Some text here with a more detailed explanation Some text
											here with a more detailed explanation Some text here with a more detailed
											explanation Some text here with a more detailed explanation Some text here
											with a more detailed explanation Some text here with a more detailed
											explanation
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
												<span style={{ margin: "0 5px" }}>GraphQL</span>
												<span style={{ margin: "0 5px" }}>MongoDB</span>
												<span style={{ margin: "0 5px" }}>Mongoose</span>
												<span style={{ margin: "0 5px" }}>Material UI</span>
												<span style={{ margin: "0 5px" }}>React</span>
												<span style={{ margin: "0 5px" }}>Apollo</span>
												<span style={{ margin: "0 5px" }}>Auth0</span>
											</div>
										</div>
									</div>
								</Modal.Body>
							</Modal>
						</div>
						<div className="card-body" style={{ borderTop: "1px solid rgba(0,0,0,.125)" }}>
							<a
								href="https://github.com/Civoremo/Arq"
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

export default BACKYARDSPORTLEAGUE;
