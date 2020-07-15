import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Quiz} from '../model/quiz';

@Component({
  selector: 'app-employee',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  quiz: Quiz;

  constructor(
    private httpClientService: HttpClientService
  ) {
  }

  ngOnInit() {
    this.httpClientService.getQuiz().subscribe(
      response => {
        this.quiz = response;
      }
    );
  }
}
