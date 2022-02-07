import { Directive, ElementRef, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[slpImageSource]',
})
export class ImageSourceDirective {
  @Input('slpImageSource') set item(data) {
    if (this.isNotAvailable(data)) {
      this.el.nativeElement.src = 'assets/images/no-image.png';
      this.el.nativeElement.alt = 'No image found !';
    } else {
      this.el.nativeElement.src = environment.imageBaseUrl + data;
      this.el.nativeElement.alt = 'Image :)';
    }
  }

  constructor(private el: ElementRef) {}

  isNotAvailable(value) {
    if (value === null || value === undefined || value === '') return true;
    else return false;
  }
}
