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
  variant?: "text" | "contained" | "outlined";
  /**
   * Если true, то кнопка не активна
   */
  disabled?: boolean;
  /**
   * Inline стили для уникальных кнопок.
   */
  sx?: object;
  /**
   * Обработчик события нажатия на кнопку.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
