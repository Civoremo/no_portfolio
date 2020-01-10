import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import { LuncherSchools } from "../../images";
import { EachCardDiv, EachCardWrapperDiv, ModalLink, CarouselImage } from "../styledCompProjects";

const LUNCHER = () => {
	const [lgProject, setLgProject] = useState(false);
	return (
		<Flip right>
			<EachCardDiv>
				<EachCardWrapperDiv>
					<div className="card" style={{ minWidth: "18rem" }}>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height: "250px",
							}}
						>
							<img
								src={LuncherSchools}
								className="card-img-top"
								style={{ maxWidth: "100%", maxHeight: "15rem" }}
								alt="project 1"
							/>
						</div>
						<div className="card-body">
							<div style={{ marginBottom: "20px" }}>
								<h5 className="card-title">Luncher</h5>
								<p className="card-text" style={{ height: "120px" }}>
									School Lunch fundraising app.
									<br></br>
									Allows schools to post their monetery needs and users to make donations towards
									the schools of their choosing.
								</p>
								<ModalLink onClick={() => setLgProject(true)}>Learn more</ModalLink>

								<Modal
									size="lg"
									show={lgProject}
									onHide={() => setLgProject(false)}
									aria-labelledby="example-modal-sizes-title-lg"
								>
									<Modal.Header closeButton>
										<Modal.Title id="example-modal-sizes-title-lg">Luncher</Modal.Title>
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
														src="https://placekitten.com/g/200/300"
														className="d-block"
														alt="first slide"
													/>
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<CarouselImage
														src="https://placekitten.com/g/300/500"
														className="d-block"
														alt="second slide"
													/>
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<CarouselImage
														src="https://placekitten.com/g/400/300"
														className="d-block"
														alt="third slide"
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
												detailed explanation Some text here with a more detailed explanation Some
												text here with a more detailed explanation Some text here with a more
												detailed explanation Some text here with a more detailed explanation Some
												text here with a more detailed explanation Some text here with a more
												detailed explanation
											</p>
											<p>
												Some text here with a more detailed explanation Some text here with a more
												detailed explanation Some text here with a more detailed explanation Some
												text here with a more detailed explanation Some text here with a more
												detailed explanation Some text here with a more detailed explanation Some
												text here with a more detailed explanation Some text here with a more
												detailed explanation
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
											></div>
										</div>
									</Modal.Body>
								</Modal>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<h4 style={{ fontSize: "1.2rem" }}>Stack</h4>
									<p>
										React | React Hooks | Stripe | CSS Grid | PostgreSQL | Styled Components | JWT
									</p>
									<br></br>
									<br></br>
								</li>
							</ul>
							<div className="card-body">
								<a
									href="https://arq.community/"
									className="card-link"
									target="_blank"
									rel="noopener noreferrer"
									style={{ display: "block" }}
								>
									Live Site
								</a>
								<a
									href="https://github.com/Civoremo/Arq"
									className="card-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github-FE
								</a>
								<a
									href="https://github.com/Civoremo/Arq"
									className="card-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github-BE
								</a>
							</div>
						</div>
					</div>
				</EachCardWrapperDiv>
			</EachCardDiv>
		</Flip>
	);
};

export default LUNCHER;
