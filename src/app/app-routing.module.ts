import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '../components/navbar/movies/movies/movies.component';
import { DetailsComponent } from '../components/movie-details/details/details.component';

const routes: Routes = [
  {
    path:'',component:MoviesComponent
  },
  {path:"movie/:id",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
