import { MouseEventHandler } from "react";

/**
 * Интерфейс компонента Button.
 */
export interface ButtonProps {
  /**
   * Задает id в DOM дереве для компонента.
   */
  id?: string;
  /**
   * Текстовое значение кнопки.
   */
  children?: string;
  /**
   * Стиль кнопки в зависимости от типа.
   */
  type?: "box" | "dark" | "light";
  /**
   * Обработчик события нажатия на кнопку.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
