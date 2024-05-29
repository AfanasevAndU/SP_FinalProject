import { FC } from "react";
import { PageContentProps } from "./pageContent.types";
import { PageContent } from "./pageContent.styles";

export const Input: FC<PageContentProps> = ({ content, id }) => {
  return <PageContent id={id}>{content}</PageContent>;
};
