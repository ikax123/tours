import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person';
 

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css'],
  providers: [PersonService]
})
export class StarwarsComponent implements OnInit {
    person: Object;

    constructor(private personService: PersonService) { }

    ngOnInit() {
        this.personService
            .getPerson()
            .subscribe(person => {
                this.person = person;
            });
    }

}
