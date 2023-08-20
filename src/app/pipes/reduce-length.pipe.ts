import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceLength'
})
export class ReduceLengthPipe implements PipeTransform {

  transform(value: string): string {
    let res=value.substring(0,10)
    res = res + "..."
    return res ;
  }

}
