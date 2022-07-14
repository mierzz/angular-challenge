import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
	name: 'reduceString'
})
export class StringReducerPipe implements PipeTransform {
	transform(input: string, maxSymbols: number = 250): string {
		return input.length > maxSymbols ?
			input.slice(0, maxSymbols) + '...' : input;
	}
}
