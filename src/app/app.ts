// list of imports
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data-service';

// this is the main component of the app, which is used to display the data collected from the APIs and to navigate between the different pages of the app
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// this class is used to collect the data from the APIs and to display it in the app, specifically student data from the api it uses oninit to collect the data when the app is initialized and stores it in the students variable,
export class App implements OnInit{
  students:any[]=[];
  weatherData: any;
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.dataService.GetStudentData().subscribe((data) => {
      this.students = data.students;
// this is used to display the student data in the console for testing purposes
      console.log(this.students);
    });

    // this is similar to the previous method but it collects the weather data from the openweathermap api and displays it in the app
    this.dataService.GetweatherData().subscribe((data) => {
        this.weatherData = data;
        console.log(this.weatherData);

      });



}
}///this is app.ts
