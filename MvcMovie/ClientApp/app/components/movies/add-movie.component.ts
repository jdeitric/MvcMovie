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
  
    model = new Movie
    postResult: Object;



    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
        http.get(baseUrl + 'api/Movies').subscribe(result => {
            this.model = result.json() as Movie;
        }, error => console.error(error));
    }

    onSubmit(form: NgForm) {
        console.log("Submitted: " + this.model.title + 
            " Release Date: " + this.model.releaseDate + " Genre: " + this.model.genre + " Price: " + this.model.price + " Rating " + this.model.rating);
        let hdrs = new Headers({ 'Content-Type': 'application/json' });

        this.http.post(this.baseUrl + 'api/Movies', this.model,
            { headers: hdrs }).subscribe(result => {
                this.postResult = result;
                this.router.navigate(['/movies']);
            });
    }



}

class Movie {
    ID: number;
    title: string;
    releaseDate: Date;
    genre: string;
    price: number;
    rating: string;
}