/**
 * Интерфейс компонента Input.
 */
export interface InputProps {
  /**
   * Текстовая подсказка.
   */
  placeholder?: string;
  /**
   * Идентификатор компонента в DOM дереве.
   */
  id?: string;
  /**
   * Обработчик события изменения значения.
   */
  onChange: (value: string) => void;
  /**
   * Значение компонента.
   */
  value?: string;
}
