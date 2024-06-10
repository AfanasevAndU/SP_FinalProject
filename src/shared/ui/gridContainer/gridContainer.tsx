import React from "react";
import { GridContainerProps } from "./gridContainer.types";
import { GridContainer, GridItem } from "./gridContainer.styles";

const ImageContainer: React.FC<GridContainerProps> = ({ gridContent }) => {
  return (
    <GridContainer>
      {gridContent.map((item, index) => (
        <GridItem key={index}>
          <img src={item} />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default ImageContainer;
