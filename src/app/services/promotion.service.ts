import { Injectable } from '@angular/core';
import {Promotion} from '../shared/Promotion';
import {PROMOTIONS} from '../shared/Promotions';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/Leaders';
@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: number): Promotion {

    return PROMOTIONS.filter((promo)=>(promo.id===id))[0];
  }

  getFeaturedPromotion(): Promotion{
    return PROMOTIONS.filter((promo)=>(promo.featured))[0];
  }

  getFeaturedLeader(): Leader{
    return LEADERS.filter((led)=>(led.featured))[0];
  }

}
