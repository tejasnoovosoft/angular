import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-child-decorator',
    templateUrl: './child-decorator.component.html',
    styleUrls: ['./child-decorator.component.css']
})
export class ChildDecoratorComponent implements OnInit {

    name = "angular"

    constructor() {
    }

    ngOnInit(): void {
    }

}
