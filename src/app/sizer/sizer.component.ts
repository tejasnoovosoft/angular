import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-sizer',
    templateUrl: './sizer.component.html',
    styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    @Input() size: number | string = ''
    @Output() sizeChange = new EventEmitter<number>()

    dec() {
        this.resize(-1)
    }

    inc() {
        this.resize(+1)
    }

    resize(currentSize: number) {
        this.size = Math.min(40, Math.max(8, +this.size + currentSize));
        this.sizeChange.emit(this.size)
    }

}
