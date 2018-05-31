import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs/songs.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { HomeComponent } from './home/home.component';


const routes:Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:rank', component: SongDetailComponent },
  { path: 'songs', component: SongsComponent }  
]


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}





