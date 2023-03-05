import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ResumeComponent } from './content/resume/resume.component';

const routes: Routes = [{ path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
