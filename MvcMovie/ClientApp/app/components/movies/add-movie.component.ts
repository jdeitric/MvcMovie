import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';
//import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  
    public movie: Movie
    postResult: Object;



    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
        http.get(baseUrl + 'api/Movies').subscribe(result => {
            this.movie = result.json() as Movie;
        }, error => console.error(error));
    }

    onSubmit(form: NgForm) {
        console.log("Submitted: " + this.movie.title + 
            " Release Date: " + this.movie.releaseDate + " Genre: " + this.movie.genre + " Price: " + this.movie.price + " Rating " + this.movie.rating);
        let hdrs = new Headers({ 'Content-Type': 'application/json' });

        this.http.post(this.baseUrl + 'api/Movies', this.movie,
            { headers: hdrs }).subscribe(result => {
                this.postResult = result;
                this.router.navigate(['/movies']);
            });
    }



}

class Movie {
    ID: number;
    title: string;
    releaseDate: number;
    genre: string;
    price: number;
    rating: string;
}