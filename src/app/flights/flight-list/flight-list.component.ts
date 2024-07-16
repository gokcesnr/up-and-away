import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  filteredFlights: any[] = [];
  apiUrl = 'http://localhost:3000/flights';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const city = params['city'];
      const date = params['date'];
      this.fetchFlights(city, date);
    });
  }

  fetchFlights(city: string, date: string): void {
    this.http.get<any[]>(this.apiUrl).subscribe(flights => {
      this.filteredFlights = flights.filter(flight => 
        flight.city === city && flight.date === date
      );
    });
  }

}
