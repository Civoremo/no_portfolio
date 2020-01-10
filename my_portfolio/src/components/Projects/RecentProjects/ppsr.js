import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import { PPSRgif, PPSRvalidate, PPSRreCaptcha, PPSRsignup } from "../../images";
import { EachCardDiv, EachCardWrapperDiv, ModalLink, CarouselImage } from "../styledCompProjects";

const PPSR = () => {
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
								src={PPSRgif}
								className="card-img-top"
								style={{ maxWidth: "100%", maxHeight: "15rem" }}
								alt="Pool & Patio Screen Repair Gif"
							/>
						</div>
						<div className="card-body">
							<div style={{ marginBottom: "20px" }}>
								<h5 className="card-title">Pool & Patio Screen Repair</h5>
								<p className="card-text" style={{ height: "120px" }}>
									Responsive local business site with CRUD operations for customer signup and access
									to restricted info.
								</p>
								<ModalLink onClick={() => setLgProject(true)}>Learn more</ModalLink>

								<Modal
									size="lg"
									show={lgProject}
									onHide={() => setLgProject(false)}
									aria-labelledby="example-modal-sizes-title-lg"
								>
									<Modal.Header closeButton>
										<Modal.Title id="example-modal-sizes-title-lg">
											Pool & Patio Screen Repair
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
													<CarouselImage
														src={PPSRreCaptcha}
														className="d-block"
														alt="PPSR reCaptcha View"
													/>
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<CarouselImage
														src={PPSRvalidate}
														className="d-block"
														alt="PPSR Form Validation View"
													/>
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<CarouselImage
														src={PPSRsignup}
														className="d-block"
														alt="PPSR Sign Up Error Handling View"
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
												Local business requested a website to showcase their work and allow
												customers to make requests through the online form.
											</p>
											<p>
												The frontend is built with react and a PostgreSQL backend for user
												registration. Incorporated into the site are various review widgets,
												ReCaptcha for form submition and cloudinary for the gallery.
											</p>
											<p>
												EmailJS is used to send new registration verification codes while Sendgrid
												is used for form submition.
											</p>
											<p>
												Backend generates an authentication code for each new user which needs to be
												submitted with first log in. Registered users are then able to view prices
												in the Shop.
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
										React | PostgreSQL | EmailJS | SendGrid | React-Bootstrap | Reaptcha |
										React-Scroll | JWT | Knex | Styled Components
									</p>
									<br></br>
								</li>
							</ul>
							<div className="card-body">
								<a
									href="https://ppsr.netlify.com/"
									className="card-link"
									target="_blank"
									rel="noopener noreferrer"
									style={{ display: "block" }}
								>
									Live Site
								</a>
								<a
									href="https://github.com/Civoremo/poolandpatioSR"
									className="card-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github-FE
								</a>
								<a
									href="https://github.com/Civoremo/ppsr_api"
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

export default PPSR;
