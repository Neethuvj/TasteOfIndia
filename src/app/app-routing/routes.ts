import {Routes} from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { HOME } from '@angular/cdk';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu',component: MenuComponent},
    {path: 'contactus',component: ContactComponent},
    {path: '',redirectTo: '/home',pathMatch:'full'}
]