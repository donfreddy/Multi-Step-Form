import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CreditCardDirectivesModule } from 'angular-cc-library';

import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';
import { WorkflowGuard as WorkflowGuard } from './workflow/workflow-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './components/personal/personal.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { ResultComponent } from './components/result/result.component';
import { NavbarComponent } from './components/navbar/navbar.component';



const routes: Routes = [
  { path: 'personal',  component: PersonalComponent },
  { path: 'card-info', component: CardInfoComponent },
  { path: 'result',  component: ResultComponent },
  { path: '',   redirectTo: '/personal', pathMatch: 'full' },
  { path: '**', component: PersonalComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    CardInfoComponent,
    ResultComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CreditCardDirectivesModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FormDataService,
    WorkflowService,
    WorkflowGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
