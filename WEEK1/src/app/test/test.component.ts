import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.setCurrentStyle()
  }

  today = Date.now()
  selectedValue: any = ''

  selectRadioValue() {
    const element = document.getElementsByName('fav-color')
    for (let i = 0; i < element.length; i++) {
      if (element[i]) {
        this.selectedValue = element[i].nodeValue
      }
    }
    console.log(element)
  }

  currentStyles: Record<string, string> = {}
  Copytext: any;

  setCurrentStyle() {
    this.currentStyles = {
      'font-style': 'italic',
      'font-weight': 'bold',
      'font-size': '24px',
    }
  }

  callTo(mobNumber: string) {
    window.alert(`Calling To ${mobNumber}`)
  }


  submitMessage: string = "Submitted"
  firstExample: any;
  isUnchanged: boolean = true;

  onSubmit(formData: NgForm) {
    console.log(formData)
  }

}
