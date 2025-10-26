import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../../service/movie.service';
import { Movie } from '../../../model/movies.interface';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  movie!: Movie;
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private movieservice: MovieService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.loadmoviedetalis(id);
    });
  }
  loadmoviedetalis(id: number): void {
    this.loading = true;
    this.movieservice.getMovieDetails(id).subscribe({
      next: (movie) => {
        this.movie = movie;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loding movie details', error);
        this.loading = false;
      },
    });
  }
  goback(){
    window.history.back()
  }
}
