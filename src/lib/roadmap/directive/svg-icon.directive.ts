import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[svgIcon]'
})
export class SvgIconDirective implements OnChanges {

  @Input() svgIcon?: string;

  constructor(
    private _elementRef: ElementRef,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['svgIcon']) {
      this._elementRef.nativeElement.innerHTML = '';

      if (this.svgIcon) {
        this._elementRef.nativeElement.innerHTML = this.svgIcon;
      }
    }
  }

}
