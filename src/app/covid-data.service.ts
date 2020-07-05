import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CovidDataService {

	private COUNTRIES_URL = 'https://corona.lmao.ninja/v2/countries';
	private GLOBAL_URL = 'https://corona.lmao.ninja/v2/all';

	constructor(private http: HttpClient) { }

	getCountries(): Observable<Country[]> {
		return this.http.get<Country[]>(this.COUNTRIES_URL);
	}

	getGlobalData(): Observable<Global> {
		return this.http.get<Global>(this.GLOBAL_URL);
	}

}

export class Global {
	updated: number = 0;
    cases: number = 0;
	todayCases: number = 0;
	deaths: number = 0;
	todayDeaths: number = 0;
	casesPerOneMillion: number = 0;
	deathsPerOneMillion: number = 0;
	recovered: number = 0;
	active: number = 0;
	critical: number = 0;
	tests: number = 0;
	testsPerOneMillion: number = 0;
	affectedCountries: number = 0;
}

export class Country extends Global {
	country: string = '';
	countryInfo: any = {};
	continent: string = '';
}

