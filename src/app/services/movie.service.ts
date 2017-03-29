import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
    apikey: string;
    
    constructor(private _jsonp:Jsonp){
        this.apikey = "d9e921787307e85186a937ab73ec9562";
        console.log('MovieService Initialized...');
    }

    getPopular(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
        .map(res => res.json());
    }

    getInTheaters(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-03-29&primary_release_date.lte=2017-04-30&api_key='+this.apikey)
        .map(res => res.json());
    }
}