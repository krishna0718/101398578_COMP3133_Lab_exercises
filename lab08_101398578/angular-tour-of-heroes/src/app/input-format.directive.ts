import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputFormat]'  // usage will be as an attribute
})
export class InputFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();  // convert to uppercase
  }
}
