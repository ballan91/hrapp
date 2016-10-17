import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './personnel';
import {PersonnelDetailComponent} from "./personnel-detail";
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';



export const ROUTES: Routes = [
  { path: '',      component: PersonnelComponent },
  { path: 'personnel',  component: PersonnelComponent },
  { path: 'personnel-detail/:id', component: PersonnelDetailComponent},
  { path: '**',    component: NoContentComponent },
];
