import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from '../components/navbar/movies/movies/movies.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DetailsComponent } from '../components/movie-details/details/details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from '../components/search/search/search.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent, DetailsComponent,SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    HttpClientModule,
    MatCardModule,
    MatPaginator,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
        MatDialogModule,
        MatInputModule,    


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
