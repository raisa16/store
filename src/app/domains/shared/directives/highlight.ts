import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class Highlight {

  element =  inject(ElementRef).nativeElement;
  constructor() { }

  ngOnInit(): void {
    this.element.style.backgroundColor = 'thistle';
  }
}
