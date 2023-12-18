import {Component, OnInit} from '@angular/core';
import {interval, map, Observable} from "rxjs";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  date: number = Date.now()
  title: string = "angular"
  price: number = 125
  num: number = 3.623
  marks: number = 96

  data$: Observable<number> = new Observable<number>();
  object: Object = {
    id: 1,
    name: "Tejas"
  }

  birthday = new Date(1988, 3, 15);
  toggle = true;

  power = 5;
  factor = 1;

  value: number = 20;

  constructor() {
  }

  ngOnInit() {
    // Simulating an Observable emitting data every second
    this.data$ = interval(1000).pipe(map(value => value + 1));
  }

  get format() {
    return this.toggle ? 'mediumDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

}
