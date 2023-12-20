import {Component, OnInit} from '@angular/core';
import {User} from "../../User";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: User[] = []

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
    }

    formData = new FormGroup({
        name: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required),
        aliases: this.formBuilder.array([this.formBuilder.control('')]),
    })

    get aliases() {
        return this.formData.get('aliases') as FormArray;
    }

    addAlias() {
        this.aliases.push(this.formBuilder.control(''))
    }

    addUser(formData: FormGroup) {
        this.users.push({
            name: formData.value.name,
            password: formData.value.password,
            state: formData.value.state,
            aliases: formData.value.aliases
        })
        formData.reset()
    }

    editInfo(user: User) {
        this.formData.controls['name'].setValue(user.name);
        this.formData.controls['password'].setValue(user.password);
        this.formData.controls['state'].setValue(user.state);
    }
}
