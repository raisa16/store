import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { url } from 'inspector';
import WaveSurfer from 'wavesurfer.js';
import waveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.html',
  styleUrl: './wave-audio.css'
})

export class WaveAudio {
@Input({required: true}) audioUrl!: string;
@ViewChild('wave') container!: ElementRef;  
private ws!: WaveSurfer;
isPlaying = signal(false);

ngAfterViewInit(){
  this.ws = WaveSurfer.create({
    url: this.audioUrl,
    container: this.container.nativeElement,
    waveColor: 'violet',
});
this.ws.on('play', () => this.isPlaying.set(true));
this.ws.on('pause', () => this.isPlaying.set(false));
}

playPause() {
  this.ws.playPause();
}
}
