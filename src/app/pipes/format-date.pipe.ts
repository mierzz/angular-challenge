import { Pipe, PipeTransform, Injectable } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
	transform(input: string): string {
		return moment(input).format('D/M/Y, HH:mm');
	}
}
