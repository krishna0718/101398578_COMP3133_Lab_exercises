import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {
  transform(value: string | undefined): string {
    return value?.replace(/-/g, ' ') ?? '';
  }
}
