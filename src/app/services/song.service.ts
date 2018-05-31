import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Song } from '../song';
import { SONGS } from '../mock-songs';
import { MessageService } from '../services/message.service';


@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private messageService : MessageService) { }
  getSongs():Observable<Song[]>{
    this.messageService.add('SongService: fetched Songs');
    return of(SONGS);
  }
  getSong(rank: number): Observable<Song> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`SongService: fetched song rank=${rank}`);
    return of(SONGS.find(song => song.rank === rank));
  }
}
