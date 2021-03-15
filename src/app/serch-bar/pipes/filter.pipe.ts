import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allMovies: any, ...arg: any[]): any {
    console.log('pipe works');
    const resultMovies: any[] = [];
    for (let movie of allMovies){
      if (movie.title.indexOf(arg) > -1){
        console.log(`${movie.title}`);
        //resultMovies.push(movie);
        //console.log(resultMovies);
        console.log(arg);
      }
    }
    return resultMovies;
  }

}
