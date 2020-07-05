import { Component, OnInit } from '@angular/core';
import { Country, CovidDataService } from './covid-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	countries: Country[] = [];
	globalData: any = {};
	deathRate: number;

	constructor(private dataService: CovidDataService) {}

	ngOnInit(): void {	
		this.dataService.getCountries().subscribe(
			response => {
				this.countries = response;
				this.countries.sort((a: Country, b: Country) => {
					const bandA = a.cases;
					const bandB = b.cases;
					let comparison = 0;
					if (bandA > bandB) comparison = -1;
					if (bandA < bandB) comparison = 1;
					return comparison;
				});
			},
			error => {
				console.log(error);
				alert('Application is down for maintenance');
			}
		);
		this.dataService.getGlobalData().subscribe(
			response => {
				this.globalData = response;
				this.deathRate = (this.globalData.deaths * 100)/this.globalData.cases;
			},
			error => {
				console.log(error);
				alert('Application is down for maintenance');
			}
		);
	}

	getDeathRate(): number {
		return Math.round(this.deathRate * 100) / 100;
	}

}
