import {Component, Input} from '@angular/core';

/**
 * @title Radios with ngModel
 */
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  answer: string;
  @Input() question: string;
  @Input() options: string[];
}
