import {Component, OnInit} from '@angular/core';
import {Item} from '../item-details/item';


@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

    isSpecial: boolean = true
    isUnchanged: boolean = true
    canSave: boolean = true
    name: string = ''
    isActive: boolean = false


    item!: Item;
    items: Item[] = []

    itemsNoTrackByCount = 0;
    itemsWithTrackByCount = 0;
    itemsWithTrackByCountReset = 0;
    itemIdIncrement = 1;

    day = new Date().getDay()


    constructor() {
    }

    ngOnInit(): void {
        this.setCurrentClasses()
        this.setCurrentStyles()
    }

    currentClasses: Record<string, boolean> = {}
    currentStyles: Record<string, string> = {}

    setCurrentClasses() {
        this.currentClasses = {
            saveable: this.canSave,
            modified: !this.isUnchanged,
            special: this.isSpecial,
        };
    }

    setCurrentStyles() {
        this.currentStyles = {
            'font-size': '20px',
            'color': 'pink',
            'font-style': 'italic'
        }
    }

    setUpperCase(name: string) {
        this.name = name.toUpperCase()
    }

    trackByItems(index: number, item: Item): number {
        return item.id;
    }

    currentItem!: Item;

    resetItems() {
        this.items = Item.items.map((item) => item.clone());
        this.currentItem = this.items[0];
        this.item = this.currentItem;
    }

    resetList() {
        this.items = Item.items.map((item) => item.clone());
        this.itemsWithTrackByCountReset = 0;
        this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    }

    changeIds() {
        this.items.forEach((i) => (i.id += this.itemIdIncrement));
        this.itemsWithTrackByCountReset = -1;
        this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
        this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
    }

    clearTrackByCounts() {
        this.resetItems()
        this.itemIdIncrement = 1
        this.itemsNoTrackByCount = 0
        this.itemsWithTrackByCount = 0
    }
}
