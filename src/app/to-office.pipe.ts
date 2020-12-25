import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toOffice'
})
export class ToOfficePipe implements PipeTransform {

  transform(value: any, ...args: string[]): number {
    console.log(value)
    console.log(args[0])
    console.log(args[1])
    return 2;
  }

}
