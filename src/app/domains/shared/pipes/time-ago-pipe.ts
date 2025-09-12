import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow, parseISO, formatDistance } from 'date-fns'; 

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    return formatDistanceToNow(parseISO(value), { addSuffix: true });
  }

}
