import { Component, OnInit } from '@angular/core';
import {  debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { MovieService } from '../../../service/movie.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
searchquery='';
searchresult:any[]=[]
private searchsubject= new Subject<string>()
  constructor(private movieservice:MovieService, private route:Router){}
ngOnInit(): void {
this.searchsubject.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap((query)=>
 this.movieservice.searchMovies(query) )
).subscribe((results)=>{
  this.searchresult=results.results
})
}
searchquerychanged(query:string){
if(query.length>=2){
  this.searchsubject.next(query)
}else{
  this.searchresult=[]
}
}
selectmovie(movie:any){
  this.route.navigate(['/movie',movie.id])
}
}
