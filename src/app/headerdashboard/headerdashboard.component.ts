import { Component } from '@angular/core';
import { NavdasboardComponent } from '../navdasboard/navdasboard.component';
import { MenulateralComponent } from '../menulateral/menulateral.component';

@Component({
  selector: 'app-headerdashboard',
  imports: [NavdasboardComponent, MenulateralComponent],
  templateUrl: './headerdashboard.component.html',
  styleUrl: './headerdashboard.component.css'
})
export class HeaderdashboardComponent {

}
