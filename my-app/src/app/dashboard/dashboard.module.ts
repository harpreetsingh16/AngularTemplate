import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './content/main/main.component';
import { AboutComponent } from './content/about/about.component';
import { ServicesComponent } from './content/services/services.component';
import { ResumeComponent } from './content/resume/resume.component';
import { TestimonalComponent } from './content/testimonal/testimonal.component';
import { ContactComponent } from './content/contact/contact.component';
import { LinkService } from './link.service';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    ServicesComponent,
    ResumeComponent,
    TestimonalComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [LinkService]
})
export class DashboardModule { }
