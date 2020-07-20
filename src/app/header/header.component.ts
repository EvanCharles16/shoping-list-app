import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navbarOpen = false;
  @Output() featureSelected = new EventEmitter<string>();

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
