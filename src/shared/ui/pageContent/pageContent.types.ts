import { ReactNode } from "react";

/**
 * интерфейс компонента PageContnet.
 */
export interface PageContentProps {
  /**
   * Задает id в DOM дереве для компонента.
   */
  id?: string;
  /**
   * Контент страницы
   */
  children: ReactNode;
}
