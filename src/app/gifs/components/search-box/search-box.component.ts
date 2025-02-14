

import { Component, ElementRef, isStandalone, ViewChild} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  template: `
    <h5>Buscar</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
  `
  // Key.enter se utiliza para que se ejecute solo
  // cuando se haga enter por teclado
})

export class SearchBoxComponent {
  constructor(private GifsService: GifsService) {}

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;


    this.GifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
