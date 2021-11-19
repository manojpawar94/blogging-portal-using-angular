import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'Go Programming Hub';
  isCollapsed = false
  selectedElement: HTMLElement | null = document.getElementById("home")

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleCollapsePanl(toggleButton: HTMLElement, collapsePanel: HTMLElement) {
    if (this.isCollapsed) {
      toggleButton.classList.add('collapsed');
      collapsePanel.classList.remove('show');
    } else {
      collapsePanel.classList.add('show');
      toggleButton.classList.remove('collapsed');
    }
    this.isCollapsed = !this.isCollapsed
  }

  openLink(navLink: HTMLElement, routerLink: string) {
    this.selectedElement?.classList.remove('active')
    this.selectedElement = navLink
    navLink.classList.add('active');
    this.router.navigate([routerLink]);
  }

}
