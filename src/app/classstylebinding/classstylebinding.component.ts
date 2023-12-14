import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-classstylebinding',
  templateUrl: './classstylebinding.component.html',
  styleUrls: ['./classstylebinding.component.css']
})
export class ClassstylebindingComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  classesToApply: string = 'italicClass'

  isColor: boolean = true

  classExpression: Record<string, boolean> = {'italicClass': true, 'colorClass': false}

  status: string = 'success'

  getColor(){
    return 'black';
  }
}
