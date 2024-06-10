import styled from "styled-components";

export const GridContainer = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% + 125px); /* Центрирование с учетом Sidebar */
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  max-width: 1200px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #efeff1;
  box-sizing: border-box;
  border-radius: 22px;
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  svg {
    width: 100%;
    height: auto;
    max-width: 80px; /* Максимальный размер SVG */
  }
`;
