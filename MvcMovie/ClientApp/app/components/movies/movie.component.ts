import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
   
})
export class MovieComponent {

    public movie: Movie;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, route: ActivatedRoute) {
        let id = route.snapshot.params['id'];
        http.get(baseUrl + 'api/Movies/' + id).subscribe(result => {
            this.movie = result.json() as Movie;
        }, error => console.error(error));
    }
}

interface Movie {
    ID: number;
    title: string;
    releaseDate: number;
    price: number;
    rating: string;
}

