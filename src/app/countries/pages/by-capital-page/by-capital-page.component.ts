import { Component, output } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  searchByCapital( term: string ): void {
    console.log('Desde ByCapitalPage');
    console.log({term});
  }
}
