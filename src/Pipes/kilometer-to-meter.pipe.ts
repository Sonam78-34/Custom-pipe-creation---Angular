import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilometerToMeter'
})
export class KilometerToMeterPipe implements PipeTransform {

  transform(kilometer: number, ...args: number[]): number
  {
    let [meterUnit]=args;

    return kilometer*meterUnit;
  }

}
