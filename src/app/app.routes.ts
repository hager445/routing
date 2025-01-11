import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfoliComponent } from './portfoli/portfoli.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent , title:'Start Framework'},
    {path:'home',component:HomeComponent , title:'Start Framework'},
    {path:'about',component:AboutComponent , title:'About'},
    {path:'portfolio',component:PortfoliComponent , title:'portfolio'},
    {path:'contact',component:ContactComponent , title:'contact'},
];
