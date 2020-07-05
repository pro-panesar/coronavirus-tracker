import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidDataService } from './covid-data.service';
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [
		CovidDataService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
