import styled from "styled-components";

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

const ModalLink = styled.div`
	color: #dc3545;
	font-family: "Open Sans Condensed";
	letter-spacing: 2px;
	font-weight: bold;

	:hover {
		cursor: pointer;
		color: #007bff;
	}
`;

const CarouselImage = styled.img`
	height: 400px;
`;

export { EachCardDiv, EachCardWrapperDiv, ModalLink, CarouselImage };
