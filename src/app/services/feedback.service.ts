import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {

    
      return this.restangular.all('feedback').post(feedback);
  
  }

}
