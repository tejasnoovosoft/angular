import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import {MessageService} from "../message.service";

@Component({
    selector: 'app-heros',
    templateUrl: './heros.component.html',
    styleUrls: ['./heros.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HerosComponent implements OnInit {
    selectedHero?: Hero;
    heros: Hero[] = []


    constructor(private heroService: HeroService, private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.getHeros();
    }

    getHeros() {
        this.heroService.getHeros().subscribe((heros) => this.heros = heros)
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero
        this.messageService.add(`Selected Hero : ${hero.id}`)
    }

    resetHero() {
        this.selectedHero = undefined
    }

}
