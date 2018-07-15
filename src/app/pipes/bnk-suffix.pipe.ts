import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnkSuffix'
})
export class BnkSuffixPipe implements PipeTransform {

  transform(value: string, lettercase: string): string {
    if (lettercase === 'lower') {
      return value.toLowerCase() + '/bnk48';
    }
    return value.toUpperCase() + '/BNK48';
  }

}
