import { isPlatformBrowser } from '@angular/common';
import { Component, Input, signal, SimpleChanges, PLATFORM_ID} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
counter = signal(0);
counterRef:number | undefined;

  constructor() {
    //NO ASYNC
    //before render
    console.log("constructor");
    console.log(('-').repeat(10));
  }
  ngOnChanges(changes: SimpleChanges) {
    //before and during render
    console.log("ngOnChanges");
    console.log(('-').repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.previousValue !== duration.currentValue) {
      this.doSomething();
    }
  }
  ngOnInit() {
    //after first render
    //once
    //async, then,  subscribe, fetch, setTimeout...
    console.log("ngOnInit");
    console.log(('-').repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
       if (isPlatformBrowser(this.platformId)) {   
    this.counterRef = window.setInterval(() => {
      console.log('tick');
      this.counter.update(c => c + 1);
    }, 1000);
  }
  }
  platformId(platformId: any) {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    //after first render
    //once
    //children have been rendered
    //DOM interactions
    console.log("ngAfterViewInit");
    console.log(('-').repeat(10));
  }
  ngOnDestroy() {
    //before destroying the component
    //cleanup, unsubscribe, detach event listeners...
    console.log("ngOnDestroy");
    console.log(('*').repeat(10));
     if (isPlatformBrowser(this.platformId)) {   
    window.clearInterval(this.counterRef);  
     }
  }
  doSomething(){
    //async, then,  subscribe, fetch, setTimeout...
    console.log("duration has changed");
    
  }
}
