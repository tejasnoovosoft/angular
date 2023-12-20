import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {Observable, of} from "rxjs";
import {HEROES} from "./heroData";
import {MessageService} from "./message.service";

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    constructor(private messageService: MessageService) {
    }

    getHeros(): Observable<Hero[]> {
        const heroes = of(HEROES);
        this.messageService.add('HeroService: fetched heroes');
        return heroes;
    }
}
