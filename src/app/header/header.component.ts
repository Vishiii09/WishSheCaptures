import {
  Component,
  HostListener,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() contactModalStatus = new EventEmitter<boolean>();
  openContact: boolean = false;
  isDropdownOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleDropdown(event: Event): void {
    event.stopPropagation();
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

  openContactModal(): void {
    this.router.navigateByUrl('/Contact');
    this.openContact = true;
    this.contactModalStatus.emit(true);
  }
}
