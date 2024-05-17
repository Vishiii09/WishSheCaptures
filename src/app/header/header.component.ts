import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDropdownOpen = false;
  constructor() {}

  ngOnInit(): void {}

  toggleDropdown(event: Event): void {
    event.stopPropagation(); // Prevent click from propagating to the document listener
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /*The @HostListener decorator listens
  for click events on the document.
  If the click is outside the dropdown,
  it closes the dropdown by setting isDropdownOpen to false. */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }
}
