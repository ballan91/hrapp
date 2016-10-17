import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Person }        from '../models';
import { PersonApi } from '../api';

@Component({
  moduleId: module.id,
  selector: 'person-detail',
  templateUrl: 'personnel-detail.component.html',
  styleUrls: [ 'personnel-detail.component.css' ],
  providers: [
    PersonApi
  ],
})
export class PersonnelDetailComponent implements OnInit {
  person: Person;

  constructor(
    private personAPI: PersonApi,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.personAPI.getPersonById(id)
        .subscribe(
            value => this.person = value,
            error => console.log(error)
        );
    });
  }

  save(): void {
    this.personAPI.updatePerson(this.person.id, this.person)
      .subscribe(
          value => void(value),
          error => console.log(error),
          () => this.goBack()
        );
  }

  goBack(): void {
    this.location.back();
  }
}
