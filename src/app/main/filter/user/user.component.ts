import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, Observable, startWith } from 'rxjs';

interface iUser {
  id: number,
  name: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
  }

  separatorKeysCodes: number[] = [ENTER, COMMA];
  userCtrl = new FormControl();
  filteredUsers: Observable<iUser[]>;
  users: iUser[]| any = [];
  allFruits: iUser[] = [
    {
      id: 0,
      name: 'Пользователь 1'
    },
    {
      id: 1,
      name: 'Пользователь 2'
    },
    {
      id: 2,
      name: 'Пользователь 3'
    },
    {
      id: 3,
      name: 'Пользователь 4'
    },
    {
      id: 4,
      name: 'Пользователь 5'
    },
    {
      id: 5,
      name: 'Пользователь 6'
    },
    {
      id: 6,
      name: 'Пользователь 7'
    },
    {
      id: 7,
      name: 'Пользователь 8'
    },
    {
      id: 8,
      name: 'Пользователь 9'
    },
    {
      id: 9,
      name: 'Пользователь 10'
    },
    {
      id: 10,
      name: 'Пользователь 11'
    },
    {
      id: 11,
      name: 'Пользователь 12'
    },
    {
      id: 12,
      name: 'Пользователь 13'
    },
    {
      id: 13,
      name: 'Пользователь 14'
    },
    {
      id: 14,
      name: 'Пользователь 15'
    },
    {
      id: 15,
      name: 'Пользователь 16'
    },
    {
      id: 16,
      name: 'Пользователь 17'
    },
    {
      id: 17,
      name: 'Пользователь 18'
    },
    {
      id: 18,
      name: 'Пользователь 19'
    },
    {
      id: 19,
      name: 'Пользователь 20'
    },
    {
      id: 20,
      name: 'Пользователь 21'
    },
    {
      id: 21,
      name: 'Пользователь 22'
    },
    {
      id: 22,
      name: 'Пользователь 23'
    },
    {
      id: 23,
      name: 'Пользователь 24'
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
    let findUsers = this.allFruits.find((user: iUser) => user.name == event.option.viewValue);
    
    if (findUsers)
      this.users.push(findUsers);
    
    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }

  private _filter(value: string): iUser[] {
    try {
      const filterValue = value.toLowerCase();

      return this.allFruits.filter(fruit => fruit.name.toLowerCase().includes(filterValue));
    } catch {
      return this.allFruits;
    }
  }
}
