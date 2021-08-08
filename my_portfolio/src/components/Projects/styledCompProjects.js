/** @format */

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

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  :hover {
    // box-shadow: 5px 5px 5px #dadada;
    z-index: 10;
  }
`;

const ModalLink = styled.div`
  color: #dc3545;
  font-family: "Open Sans Condensed";
  letter-spacing: 2px;
  font-weight: bold;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    color: #007bff;
  }
`;

const CarouselImage = styled.img`
  height: 400px;
`;

export { EachCardDiv, EachCardWrapperDiv, ModalLink, CarouselImage };
