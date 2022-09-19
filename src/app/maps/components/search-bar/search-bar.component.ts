import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent{

  private debaunceTimer?: NodeJS.Timeout;

  constructor() { }

  onQueryChanged( query: string = '' ) {
    
    if ( this.debaunceTimer ) clearTimeout( this.debaunceTimer );

    this.debaunceTimer = setTimeout(() => {

    }, 350);

  }

}
