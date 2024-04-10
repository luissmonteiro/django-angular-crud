import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent {
  @Output() searchTextChange = new EventEmitter<string>();

  onSearchTextChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTextChange.emit(target.value);
  }
}