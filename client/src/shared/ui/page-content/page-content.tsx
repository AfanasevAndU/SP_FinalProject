import { PageContentProps } from "./page-content.types";
import { FC } from "react";
import { StyledContent } from "./page-content.styles";
import React from "react";

/**
 * Это компонент PageContent.
 * Используется для отображения основного контента страницы.
 */
export const PageContent: FC<PageContentProps> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};
