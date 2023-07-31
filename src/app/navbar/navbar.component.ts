import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrollToElement(selector: any) {
    const element = document.querySelector(selector);
    element.scrollIntoView({behavior: "smooth"});
  }
}
