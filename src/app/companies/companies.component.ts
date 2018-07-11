import { Component, OnInit } from '@angular/core';
import { COMPANIES } from '../mocks/mock-companies';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies = COMPANIES;

  constructor() { }

  ngOnInit() {
  }

}
