import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PersonApi } from '../api'
import { Person } from '../models'

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'personnel',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    PersonApi
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './personnel.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './personnel.component.html'
})
export class PersonnelComponent implements OnInit {

  personnel: Person[];
  selectedPerson: Person;

  constructor(
    private personAPI: PersonApi,
    private router: Router)  {}

  getPersonnel(): void {
    this.personAPI.getPersonnel()
    .subscribe(
      value => this.personnel = value,
      error => console.log(error)
    )
  }
  ngOnInit(): void {
    this.getPersonnel()
  }

  onSelect(person: Person): void {
    this.selectedPerson = person
  }

  goToDetail(person: Person): void {
    this.router.navigate(['/personnel-detail', person.id]);
  }

}
