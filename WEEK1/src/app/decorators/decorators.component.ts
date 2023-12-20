import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {ChildDecoratorComponent} from "../child-decorator/child-decorator.component";
import {ChildContentComponent} from "../child-content/child-content.component";
import {ChildComponent} from "../child/child.component";

@Component({
    selector: 'app-decorators',
    templateUrl: './decorators.component.html',
    styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements AfterViewInit {

    name = "Angular"

    @ViewChild(ChildDecoratorComponent, {static: false}) childComponent!: ChildDecoratorComponent;
    @ViewChild('pRef') pRef!: ElementRef
    @ViewChildren(ChildDecoratorComponent) children!: QueryList<ChildDecoratorComponent>;
    @ViewChild('lastComponent') child!: ChildDecoratorComponent

    // @ViewChild('lastComponent') child: ChildDecoratorComponent | null = null

  @ContentChild('projectedParagraph', {static: false}) projectedParagraph!: ElementRef;
  @ContentChildren(ChildContentComponent) childrenContent!: QueryList<ChildComponent>;

    constructor() {
    }

    ngAfterViewInit() {
        if (this.childComponent) {
            console.log('Child component:', this.childComponent);
        }
        this.pRef.nativeElement.innerHTML = "DOM Update Successfully"
        console.log(this.children, "ViewChildren")
        this.children.forEach((child) => {
            console.log(child)
        })
        console.log(this.child, "Selected One Child")

      this.childComponent.name = 'Angular in Child Component'
    }

    ngOnInit() {
        console.log(`${this.childComponent} in OnInit`)
    }

  ngAfterContentInit() {
    console.log('Projected paragraph:', this.projectedParagraph.nativeElement.textContent);

    this.childrenContent.forEach(child => {
      console.log('Child component:', child);
    });
  }
}
