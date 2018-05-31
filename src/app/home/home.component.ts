import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import {SongService} from '../services/song.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Songs: Song[] = [];
 
  constructor(private songService: SongService) { }
 
  ngOnInit() {
    this.getSongs();
  }
 
  getSongs(): void {
    this.songService.getSongs()
      .subscribe(songs => this.Songs = songs.slice(1, 5));
  }
}
