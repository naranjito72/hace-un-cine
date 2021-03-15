import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// things we need for love
import { Observable, of, EMPTY } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  items?: {
    [key: string]: number | string,
   }[]
  constructor(private httpClient: HttpClient) {

  }

// where to get the data from
  public baseUrl: string = "https://my-json-server.typicode.com/naranjito72/hace-un-cine/movies";
  public searchResults: any;
  public filterMovies: string = '';
  // makes http call to the api
  public searchEntries(term: any): Observable<any> | undefined{
    if(term === ""){
      console.log('service works');
      return EMPTY;
    }else{
      let params: any = {q: term}
      return this.httpClient.get(this.baseUrl, {params}).pipe(
        map(res => {
          console.log(res);
          return this.searchResults = res;
        })
      );
    }

  }
// return response
public _searchEntries(term: any){
  return this.searchEntries(term)
}

}
