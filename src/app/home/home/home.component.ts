import { Component } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  filteredFLights: Flight[] = []


}
