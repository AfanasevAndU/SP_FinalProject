/**
 * Интерфейс компонента Label.
 */
export interface LabelProps {
  /**
   * Текст лейбла.
   */
  children: string;
  /**
   * Идентификатор элемента формы, для которого создается лейбл.
   */
  htmlFor?: string;
  /**
   * Задает id в DOM дереве для компонента.
   */
  id?: string;
}
