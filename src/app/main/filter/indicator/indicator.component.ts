import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';

interface iIndicator {
  id: number,
  name: string
}

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.sass']
})
export class IndicatorComponent implements OnInit {
  ngOnInit(): void {
  }

  separatorKeysCodes: number[] = [ENTER, COMMA];
  userCtrl = new FormControl();
  filteredUsers: Observable<iIndicator[]>;
  users: iIndicator[]| any = [];
  allFruits: iIndicator[] = [
    {
      id: 0,
      name: 'Показатель 1'
    },
    {
      id: 1,
      name: 'Показатель 2'
    },
    {
      id: 2,
      name: 'Показатель 3'
    },
    {
      id: 3,
      name: 'Показатель 4'
    },
    {
      id: 4,
      name: 'Показатель 5'
    },
    {
      id: 5,
      name: 'Показатель 6'
    },
    {
      id: 6,
      name: 'Показатель 7'
    },
    {
      id: 7,
      name: 'Показатель 8'
    },
    {
      id: 8,
      name: 'Показатель 9'
    },
    {
      id: 9,
      name: 'Показатель 10'
    },
    {
      id: 10,
      name: 'Показатель 11'
    },
    {
      id: 11,
      name: 'Показатель 12'
    }
  ];

  @ViewChild('userInput') userInput: ElementRef<HTMLInputElement> | any;

  constructor() {
    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value)
      this.users.push(value);

    event.chipInput!.clear();

    this.userCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.users.indexOf(fruit);

    if (index >= 0)
      this.users.splice(index, 1);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let findUsers = this.allFruits.find((user: iIndicator) => user.name == event.option.viewValue);
    
    if (findUsers)
      this.users.push(findUsers);
    
    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }

  private _filter(value: string): iIndicator[] {
    try {
      const filterValue = value.toLowerCase();

      return this.allFruits.filter(fruit => fruit.name.toLowerCase().includes(filterValue));
    } catch {
      return this.allFruits;
    }
  }
}
