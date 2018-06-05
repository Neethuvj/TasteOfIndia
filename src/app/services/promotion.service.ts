import { Injectable } from '@angular/core';
import {Promotion} from '../shared/Promotion';
import {PROMOTIONS} from '../shared/Promotions';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/Leaders';
@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions():Promise<Promotion[]> {
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: number): Promise<Promotion> {

    return Promise.resolve(PROMOTIONS.filter((promo)=>(promo.id===id))[0]);
  }

  getFeaturedPromotion(): Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter((promo)=>(promo.featured))[0]);
  }

  getFeaturedLeader(): Promise<Leader>{

    return Promise.resolve(LEADERS.filter((led)=>(led.featured))[0]);

  }

}
