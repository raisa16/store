import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { List } from './domains/products/pages/list/list';

@Component({  
selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('store');
}
