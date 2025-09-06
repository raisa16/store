import { Component, signal } from '@angular/core';
import { Counter } from '../../../shared/components/counter/counter';
@Component({
  selector: 'app-about',
  imports: [Counter],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
duration = signal(1000);
message = signal("I'm the parent");

changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
}
changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
}
}
