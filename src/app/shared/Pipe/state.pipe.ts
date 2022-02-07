import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stateType'})
export class StatePipe implements PipeTransform {
    transform(value: number): string {
        if (value == 0) {
          return "disable";
        }
        else if (value == 1) {
          return "enable";
        }

      }
}