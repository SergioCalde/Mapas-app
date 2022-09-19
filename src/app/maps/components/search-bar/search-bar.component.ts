import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent{

  private debaunceTimer?: NodeJS.Timeout;

  constructor( private placesService: PlacesService) { }

  onQueryChanged( query: string = '' ) {
    
    if ( this.debaunceTimer ) clearTimeout( this.debaunceTimer );

    this.debaunceTimer = setTimeout(() => {
      this.placesService.getPlacesByQuery( query );
    }, 350);

  }

}

