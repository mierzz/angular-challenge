import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class FormatService {
  formatDate(date: string): string {
    return moment(date).format('D/M/Y, HH:mm');
  }

  formatRoundNumber(number: number): string {
    let formated: string;
    if (number < 1000) {
      formated = number.toString();
    } else {
      formated = (number / 1000).toFixed(1) + 'K';
    }

    return formated;
  }

  short(string: string, maxSymbols: number = 250) {
    let shortString = string;
    if (shortString.length > maxSymbols) {
      shortString = shortString.slice(0, maxSymbols) + '...';
    }
    return shortString;
  }
}
