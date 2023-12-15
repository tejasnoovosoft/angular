import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: './component.component.html',
    styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

    data = 0
    showChild: boolean = true
    items: string[] = ["Television", "Airbuds", "OnePlus", "Fire-bolt"];

    user = {
        name: "Alex"
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    changeInParent() {
        this.data += 1
    }

    updateUser() {
        this.user.name = "Carry"
    }

    update() {
        this.showChild = !this.showChild
    }

    addProduct(newItem: string) {
        this.items.push(newItem)
    }

    removeProduct(item: string) {
        this.items = this.items.filter((it) => it !== item)
    }
}
