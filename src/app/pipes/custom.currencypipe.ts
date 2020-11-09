import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
    name: 'mycurrency',
    pure: false
  })
  export class MycurrencyPipe implements PipeTransform {
    code: string;
    val: any;
    constructor() {}

    transform(value: number, currencyCode: string = this.code, 
        locale: string = localStorage.getItem('lang')): string | null {
        if(localStorage.getItem('lang') === 'en') {
            this.code = 'USD';
            this.val = value;
        } else {
            this.code = 'RUB';
            this.val = (value*76.43)/100;
        }
        return formatCurrency(
          this.val,
          locale,
          getCurrencySymbol(this.code, 'wide'),
          currencyCode
        );
    }
}