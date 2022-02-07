import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pickUpTypeCornerStop'})
export class PickUpTypePipeCornerStop implements PipeTransform {
  transform(value: number): string {      
    return (value == 1 ? "Corner Stop" : "Door To Door" );
  }
  
}


