import {QuestionType} from './question_type';

export class Question {
  constructor(
    public id: number,
    public question: string,
    public category: string,
    public question_type: QuestionType,
  ) {
  }
}
