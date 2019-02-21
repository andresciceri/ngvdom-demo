import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from '../../environments/environment';
import { IPokeList } from "../models";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  list(): Observable<IPokeList> {
    const url = `${this.url}pokemon/`;
    return this.http.get<IPokeList>(url)
      .pipe(
        catchError(this.handleError('Get Pokemons List', null))
      );
  }

  getPokemonByUrl(url :string): Observable<any> {
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError('Get Pokemon', null))
    );
  }

  private handleError<T>(operation = 'operation', results?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messages(`${operation} ha fallado: ${error.message}`);
      return of(results as T);

    }
  }

  private messages(msg: string) {
    console.error(msg);
  }

}
