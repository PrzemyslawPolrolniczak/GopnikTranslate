import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gopnik';
  text;
  music = true;
  mute = false;
  controllMusic() {
    this.music = !this.music;
    this.mute = !this.mute;
    return {
      music : this.music,
      mute : this.mute
    };
  }
}
