import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: any,trimStart:number,trimEnd:number) {
    return value.substr(trimStart,trimEnd) + '...';
  }
}
