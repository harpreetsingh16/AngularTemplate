import { Component } from '@angular/core';
import { LinkService } from './link.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public link:LinkService){}

}
