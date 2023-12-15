import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-input-output',
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

    @Input() items: any;
    @Output() newItem = new EventEmitter()
    @Output() removeItem = new EventEmitter()

    constructor() {
    }

    ngOnInit(): void {
    }

    addProduct(item: string) {
        this.newItem.emit(item)
    }

    removeItems(item: string) {
        this.removeItem.emit(item)
    }
}
