import { Component, OnInit } from '@angular/core';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  generalInfo:any;
  countries : any[];
  spain : any;

  isInfo:boolean;
  isGlobal:boolean;
  constructor(private covidService: CovidService){

    this.isInfo = false;
    this.isGlobal = false;
  }
  
  ngOnInit(): void {
    this.covidService.generalResults().subscribe(
      response => {
        //console.log(response)
        this.generalInfo = response;
        console.log(this.generalInfo);
      },
      error =>{
        console.log(error)
      }
    )

    this.covidService.countryResults().subscribe(
      response=>{
        this.countries = response;
        console.log(this.countries);
      }
    )

    this.covidService.spainResults().subscribe(
      response=>{
        this.spain = response;
        console.log(this.spain);
      },
      error=>{
        console.log(error);
      }
    )
  }

  seeAll():void{
    this.isInfo = true;
    this.isGlobal = false;
  }

  seeGlobal():void{
    this.isInfo = false;
    this.isGlobal = true;
  }
  
  title = 'covid';
}
