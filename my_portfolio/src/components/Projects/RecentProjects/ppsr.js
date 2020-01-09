import React, { useState } from "react";
import { ReactLogo, Javascript, Html5, Css3 } from "styled-icons/boxicons-logos";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import {
	PPSRgif,
	PPSRvalidate,
	PPSRreCaptcha,
	PPSRsignup,
	mongodb,
	graphql,
	apollo,
} from "../../images";
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
								<p className="card-text">
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
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<ReactLogo
										className="reactlogo"
										style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
									/>
									{/* <Redux className='reduxlogo' style={{height: '40px', width: '40px', margin: '5px 10px 0 10px'}} /> */}
									<img
										className="mongodblogo"
										src={mongodb}
										alt={"mongodb icon"}
										style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
									/>
									<img
										className="apollo"
										src={apollo}
										alt={"apollo icon"}
										style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
									/>
									<img
										className="graphql"
										src={graphql}
										alt={"graphql icon"}
										style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
									/>
									<Javascript
										className="javascriptlogo"
										style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
									/>
									<Html5
										className="html5logo"
										style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
									/>
									<Css3
										className="css3logo"
										style={{ height: "40px", width: "40px", margin: "5px 10px 0 10px" }}
									/>
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
