import {FormArray} from "@angular/forms";

export interface User {
    name: string,
    password: string,
    state: string,
    aliases: FormArray
}
