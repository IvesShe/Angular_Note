import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ivesUppercase'
})
export class IvesUppercasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    console.log("@@@transform", value)
    if (value == 'ives888') {
      return 'good-' + value + '元'
    }
    return value.toUpperCase();
  }

}
