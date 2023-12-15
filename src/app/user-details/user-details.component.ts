import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {

    @Input() user: any;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngDoCheck() {
        console.log("DO CHECK")
    }

    ngAfterContentInit() {
        console.log("Triggered ngAfterContentInit")
    }

    ngAfterContentChecked(){
        console.log("Triggered ngAfterContentChecked")
    }

    ngAfterViewInit(){
        console.log("after view init")
    }
}
