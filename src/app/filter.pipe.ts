import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    return value.filter((search: any) => {
      return (
        search.product.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        search.price.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        search.available.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    });
  }
}
