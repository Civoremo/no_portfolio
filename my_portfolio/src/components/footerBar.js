import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const FooterDiv = styled.div`
	background-color: red;
	color: #222;
	font-family: Open Sans Condensed;
	letter-spacing: 4px;
	font-weight: bold;
	padding: 20px 0;
`;

const FooterContent = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	@media (max-width: 550px) {
		flex-direction: column;
	}
`;

const TextSpacer = styled.div`
	width: 20px;

	@media (max-width: 550px) {
		display: none;
	}
`;

const FooterBar = () => {
	let dateYear = new Date();

	return (
		<FooterDiv>
			<Container>
				<FooterContent>
					<div>© Nedim Omerovic</div>
					<TextSpacer>-</TextSpacer>
					<div>All rights reserved 2019-{dateYear.getFullYear()}</div>
				</FooterContent>
			</Container>
		</FooterDiv>
	);
};

export default FooterBar;
