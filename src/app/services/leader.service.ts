import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/LEADERS';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    
    return this.restangular.all('leaders').getList();
  
  }

  getLeader(id:number):Observable<Leader>{
      
    return  this.restangular.one('leaders',id).get();
}


  getFeaturedLeader(): Observable<Leader>{
   

   return this.restangular.all('leaders').getList({featured: true})
   .map(leaders => leaders[0]);
  

  }


}
