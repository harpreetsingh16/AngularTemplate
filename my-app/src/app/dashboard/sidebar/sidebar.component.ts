import { Component } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public link:LinkService){}

}
