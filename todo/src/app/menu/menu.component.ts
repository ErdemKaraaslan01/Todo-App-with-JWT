import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [NgIf, RouterLink]
})
export class MenuComponent implements OnInit {

  constructor(public basicAuthenticationService: BasicAuthenticationService) {
  }

  ngOnInit() {
  }

}
