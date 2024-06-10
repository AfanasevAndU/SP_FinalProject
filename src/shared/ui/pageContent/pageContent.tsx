import { FC } from "react";
import { PageContentProps } from "./pageContent.types";
import { PageContentContainer } from "./pageContent.styles";

export const PageContent: FC<PageContentProps> = ({ children, id }) => {
  return <PageContentContainer id={id}>{children}</PageContentContainer>;
};
