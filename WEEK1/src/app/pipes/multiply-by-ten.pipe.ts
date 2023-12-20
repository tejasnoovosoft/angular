import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'multiplyByTen'
})
export class MultiplyByTenPipe implements PipeTransform {

  transform(value: number): number {
    return value * 10;
  }

}
