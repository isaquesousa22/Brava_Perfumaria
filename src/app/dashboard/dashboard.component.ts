import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavdasboardComponent } from '../navdasboard/navdasboard.component';
import { HeaderdashboardComponent } from '../headerdashboard/headerdashboard.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, FooterComponent, NavdasboardComponent, HeaderdashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
