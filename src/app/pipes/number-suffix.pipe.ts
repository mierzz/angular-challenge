import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
	name: 'thousandSuffix'
})
export class ThousandSuffixesPipe implements PipeTransform {
	transform(input: number, args?: any): string {
		const suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
		let exp;

		if (Number.isNaN(input)) {
			return '';
		}

		if (input < 1000) {
			return String(input);
		}

		exp = Math.floor(Math.log(input) / Math.log(1000));

		return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
	}
}
