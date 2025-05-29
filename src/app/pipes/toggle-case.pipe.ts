import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggeCase'
})

export class ToggleCasePipe implements PipeTransform {

    transform(value: string, upper: boolean): string {
        console.log({value, upper});
        if (!upper) return value;
        return value.toUpperCase()
    }
}