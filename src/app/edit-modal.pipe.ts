import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editModal'
})
export class EditModalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
