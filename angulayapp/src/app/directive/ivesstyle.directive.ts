import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIvesstyle]'
})
export class IvesstyleDirective {

  @Input() appIvesstyle: any;
  constructor(public ref: ElementRef) {
    console.log("@@@appIvesstyle constructor", this.appIvesstyle)

  }

  ngOnChanges() {
    console.log("@@@appIvesstyle ngOnChanges", this.appIvesstyle, this.ref)
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    this.ref.nativeElement.className = this.appIvesstyle;
    this.ref.nativeElement.innerHTML = this.appIvesstyle;
    this.ref.nativeElement.addEventListener("click", () => {
      this.ref.nativeElement.style.background = "yellow";
    })
  }

}
