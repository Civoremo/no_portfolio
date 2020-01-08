import React, { useState } from "react";
import styled from "styled-components";
import { ReactLogo, Javascript, Html5, Css3 } from "styled-icons/boxicons-logos";
import Flip from "react-reveal/Flip";
import Modal from "react-bootstrap/Modal";
import {
	Arq1,
	Arq2,
	Arq3,
	Arq4,
	Arq5,
	Arq6,
	Arq7,
	ArqGif,
	mongodb,
	graphql,
	apollo,
} from "../../images";

const EachCardDiv = styled.div`
	margin: 20px 10px 20px 10px;
	width: 18.2rem;
	position: relative;
	min-height: 660px;
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

const ArqProject = () => {
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
								src={ArqGif}
								className="card-img-top"
								style={{ maxWidth: "100%", maxHeight: "15rem" }}
								alt="Arq Gif"
							/>
						</div>
						<div className="card-body">
							<div style={{ marginBottom: "20px" }}>
								<h5 className="card-title">Arq</h5>
								<p className="card-text">
									A team collaboration, organization, and communication tool which keeps track of a
									teams multi-platform documents, activities and conversations all in one place.
								</p>
								<ModalLink onClick={() => setLgProject(true)} style={{ color: "#007bff" }}>
									Learn more
								</ModalLink>

								<Modal
									size="lg"
									show={lgProject}
									onHide={() => setLgProject(false)}
									aria-labelledby="example-modal-sizes-title-lg"
									scrollable="true"
								>
									<Modal.Header closeButton>
										<Modal.Title id="example-modal-sizes-title-lg">Arq</Modal.Title>
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
													minHeight: "400px",
													maxHeight: "400px",
												}}
											>
												<div
													className="carousel-item active"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<img src={Arq1} className="d-block" alt="first slide" />
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<img src={Arq2} className="d-block" alt="second slide" />
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<img src={Arq3} className="d-block" alt="third slide" />
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<img src={Arq4} className="d-block" alt="fourth slide" />
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<img src={Arq5} className="d-block" alt="fifth slide" />
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<img src={Arq6} className="d-block" alt="sixth slide" />
												</div>
												<div
													className="carousel-item"
													style={{ marginRight: "0px", width: "auto" }}
												>
													<img src={Arq7} className="d-block" alt="seventh slide" />
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
										<div
											style={{
												margin: "30px 20px",
												fontFamily: "Nunito",
												letterSpacing: "2px",
											}}
										>
											<p>
												<a
													href="https://www.youtube.com/watch?v=XI_-0z4J-n4"
													className="card-link"
													target="_blank"
													rel="noopener noreferrer"
												>
													Team Project Video
												</a>
											</p>
											<p>
												Team was tasked with adding new features to an already existing codebase.
											</p>
											<p>
												New features included the ability to add files, to be able to organize files
												into folders, move files between folders, edit and delete files and folders.
											</p>
											<p>
												I was tasked with redeploying the back-end and adding the necessary code for
												the creation, editing, updating and deleting of files and folders.
											</p>
											<p>
												The first hurdle I had to overcome was the inadequate documentation for
												redeployment. After spending some hours familiarizing myself with the
												existing code and trying to follow the documentation for deployment, I kept
												running into the issue of the back-end working on local machines but not on
												the server.
												<br />
												Combing through all of the code, the issue was discovered; an undocumented
												environment variable.
											</p>
											<p>
												The real work could finally begin; learning about mongoDB, mongoose and
												graphQL.
												<br />
												<br />
												The following 4 weeks were some of the intense and most rewarding time;
												while constantly under the pressure to build out the back-end so the rest of
												the team could work on the front-end features, I had the opportunity to
												learn unfamiliar frameworks.
											</p>
											<p>
												Once the back-end was complete, I jumped to the front-end to help the team
												build out all the necessary components. My initial focus was on the the
												Drag-n-Drop functionality of files and folders. Next I chose to work on the
												editing of files and folders. Lastly I focused on my attention on the filter
												system of our newly implemented "Activity Timeline".
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
								>
									New Site
								</a>
								<a
									href="https://sveza.app/"
									className="card-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									Old Site
								</a>
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
			</EachCardDiv>
		</Flip>
	);
};

export default ArqProject;
