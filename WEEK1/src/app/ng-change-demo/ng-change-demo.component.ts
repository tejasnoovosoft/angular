import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-ng-change-demo',
  templateUrl: './ng-change-demo.component.html',
  styleUrls: ['./ng-change-demo.component.css']
})
export class NgChangeDemoComponent implements OnInit, OnChanges {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() parentData: any;


  changeInChild() {
    this.parentData -= 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
