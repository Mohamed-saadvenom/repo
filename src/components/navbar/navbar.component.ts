import { Component } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { AppRoutingModule } from '../../app/app-routing.module';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search/search.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class NavbarComponent {
  constructor(
    private theme: MovieService,
    private dialog: MatDialog,
    private router: Router
  ) {}
  opensearch() {
    this.dialog.open(SearchComponent, {
      width: '600px',
      maxWidth: '90VM',
      maxHeight: '90VM',
      data: { name: 'search' },
    });
  }
  toggledarkmode() {
    document.body.classList.toggle('dark-theme');
  }
}
