import { ReactElement } from "react";

/**
 * Интерфейс компонента Header
 */
export interface HeaderProps {
  /**
   * Контент шапки экрана.
   */
  children: ReactElement | Array<ReactElement>;
}
