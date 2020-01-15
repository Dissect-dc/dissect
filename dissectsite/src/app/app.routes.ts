import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {MembersComponent} from "./pages/members/members.component";
import {BuildComponent} from "./pages/build/build.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: MembersComponent
  },
  {
    path: 'berserker',
    component: BuildComponent
  },
  {
    path: 'firebrand',
    component: BuildComponent
  },
  {
    path: 'renegade',
    component: BuildComponent
  },
  {
    path: 'soulbeast',
    component: BuildComponent
  },
  {
    path: 'weaver',
    component: BuildComponent
  }
];
