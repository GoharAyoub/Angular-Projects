import { Component, OnInit } from '@angular/core';
import {Song} from '../song';

import { SongService } from '../services/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs :Song[];
  selectedSong:Song;

  constructor(private songService: SongService) {

   }

  ngOnInit() {
    this.getSongs();
  }
  onSelect(song:Song):void{
    this.selectedSong=song;
  }
  getSongs(): void{
    this.songService.getSongs().subscribe(songs => this.songs =songs);
  }

}
