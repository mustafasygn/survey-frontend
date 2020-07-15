import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quiz} from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  getQuiz() {
    return this.httpClient.get<Quiz>('http://localhost:8080/survey');
  }
}
