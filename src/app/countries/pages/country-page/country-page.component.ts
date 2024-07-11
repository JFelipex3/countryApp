import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?: Country;
  public keysTranslation?: string[];

  constructor(private activatedRoute: ActivatedRoute,
              private countriesServices: CountriesService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesServices.searchCountryAlphaCode(id)),
      )
      .subscribe( country => {
        if (!country) {return this.router.navigateByUrl('');}
        this.keysTranslation = Object.keys(country.translations);
        return this.country = country;
      })
  }

  searchCountryCode(code: string){
    this.countriesServices.searchCountryAlphaCode(code)
      .subscribe( country => {
        console.log(country);
      })
  }

}
