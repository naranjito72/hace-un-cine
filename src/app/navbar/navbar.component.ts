import { Component, OnInit } from '@angular/core';

import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'toh-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title$ = this.navbarservice.title;

  constructor(private navbarservice: NavbarService) { }


  ngOnInit(): void {
  }

}
