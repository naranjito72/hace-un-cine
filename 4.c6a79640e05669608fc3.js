(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ubTF:function(e,t,i){"use strict";i.r(t),i.d(t,"MovieModule",function(){return g});var n=i("SVse"),r=i("iInd"),o=i("8Y7J"),a=i("LRne");const s=[{id:1,title:"The Shawshank Redemption",poster:"https://i.imgur.com/SuW2ZlC.jpg",synopsis:"In 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death...",genres:["Crime","Drama"],year:1994,director:"Frank Darabont",actors:["Tim Robbins","Morgan Freeman","Bob Gunton","William Sadler","Clancy Brown","Gil Bellows"]},{id:2,title:"The Godfather",poster:"https://i.imgur.com/Uzvny9I.jpg",synopsis:"In late summer 1945, guests are gathered for the wedding reception of Don Vito Corleone's daughter Connie (Talia Shire) and Carlo Rizzi (Gianni Russo). Vito...",genres:["Crime","Drama"],year:1972,director:"Francis Ford Coppola",actors:["Marlon Brando","Al Pacino","James Caan","Richard S. Castellano","Robert Duvall","Sterling Hayden"]},{id:3,title:"The Godfather Part II",poster:"https://i.imgur.com/abJNkWI.jpg",synopsis:"The Godfather Part II presents two parallel storylines. One involves Mafia chief Michael Corleone in 1958/1959 after the events of the first movie; the othe...",genres:["Crime","Drama"],year:1974,director:"Francis Ford Coppola",actors:["Al Pacino","Robert Duvall","Diane Keaton","Robert De Niro","John Cazale","Talia Shire"]},{id:4,title:"The Dark Knight",poster:"https://i.imgur.com/3jLPB46.jpg",synopsis:"The movie begins with a gang of men with clown masks breaking into the bank where the mob has a large portion of their money stashed. It begins with five cl...",genres:["Action","Crime","Drama","Thriller"],year:2008,director:"Christopher Nolan",actors:["Christian Bale","Heath Ledger","Aaron Eckhart","Michael Caine","Maggie Gyllenhaal","Gary Oldman"]},{id:5,title:"Schindler's List",poster:"https://i.imgur.com/IWZJOmu.jpg",synopsis:"The relocation of Polish Jews from surrounding areas to Krakow begins in late 1939, shortly after the outbreak of World War II, when the German Army defeats...",genres:["Biography","Drama","History"],year:1993,director:"Steven Spielberg",actors:["Liam Neeson","Ben Kingsley","Ralph Fiennes","Caroline Goodall","Jonathan Sagall","Embeth Davidtz"]}];var l=i("IheW");let c=(()=>{class e{constructor(e){this.http=e,this.ROOT_URL="https://my-json-server.typicode.com/naranjito72/hace-un-cine/movies"}getMoviesHttp(){return this.http.get(this.ROOT_URL)}getMovieHttp(e){return this.http.get(`${this.ROOT_URL}/${e}`)}getMovies(){return console.log(s),Object(a.a)(s)}getMovie(e){return Object(a.a)(s.find(t=>+t.id==+e))}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(l.a))},e.\u0275prov=o.yb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=i("Bcq/");let d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.wb({type:e,selectors:[["toh-movie"]],inputs:{movie:"movie"},decls:25,vars:6,consts:[[1,"row","d-flex","flex-row","justify-content-center","mt-5"],[1,"col-lg-4","col-md-6","col-sm-12"],[1,"card","border-0","bg-transparent",2,"width","18rem"],["alt","poster",3,"src"],["id","cardOnlyText",1,"card","bg-dark",2,"width","18rem"],[1,"card-body"],[1,"card-title","bg-transparent","text-light"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted","lead"],[1,"card-text"],[1,"card-text","text-muted","lead"],[1,"card-text","lead","text-muted"],[1,"card-text","lead"]],template:function(e,t){1&e&&(o.Db(0,"br"),o.Fb(1,"div",0),o.Fb(2,"div",1),o.Fb(3,"div",2),o.Db(4,"img",3),o.Eb(),o.Eb(),o.Fb(5,"div",1),o.Fb(6,"div",4),o.Fb(7,"div",5),o.Fb(8,"h5",6),o.Tb(9),o.Eb(),o.Fb(10,"h5",7),o.Tb(11),o.Eb(),o.Fb(12,"h6",8),o.Tb(13,"Synopsis"),o.Eb(),o.Fb(14,"p",9),o.Tb(15),o.Eb(),o.Fb(16,"div",10),o.Tb(17,"Actors:"),o.Eb(),o.Fb(18,"p",9),o.Tb(19),o.Eb(),o.Fb(20,"p",11),o.Tb(21,"Directed by "),o.Db(22,"br"),o.Fb(23,"span",12),o.Tb(24),o.Eb(),o.Eb(),o.Eb(),o.Eb(),o.Eb(),o.Eb()),2&e&&(o.tb(4),o.Ob("src",null==t.movie?null:t.movie.poster,o.Qb),o.tb(5),o.Ub(null==t.movie?null:t.movie.title),o.tb(2),o.Ub(null==t.movie?null:t.movie.year),o.tb(4),o.Ub(null==t.movie?null:t.movie.synopsis),o.tb(4),o.Ub(null==t.movie?null:t.movie.actors),o.tb(5),o.Ub(null==t.movie?null:t.movie.director))},styles:[".cardOnlyText[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{max-width:300px;height:460px}@media (max-width:640px){img[_ngcontent-%COMP%]{max-width:300px}}"]}),e})(),h=(()=>{class e{constructor(e,t,i){this.movieService=e,this.navBarservice=t,this.route=i}ngOnInit(){this.id=Number(this.route.snapshot.paramMap.get("id")),this.movieSub$=this.movieService.getMovieHttp(this.id).subscribe(e=>{var t,i;this.movie=e,null===(t=this.navBarservice.title)||void 0===t||t.next(null===(i=this.movie)||void 0===i?void 0:i.title),console.log(e)})}ngOnDestroy(){var e;null===(e=this.movieSub$)||void 0===e||e.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o.Cb(c),o.Cb(b.a),o.Cb(r.a))},e.\u0275cmp=o.wb({type:e,selectors:[["toh-movie-detail"]],decls:1,vars:1,consts:[[3,"movie"]],template:function(e,t){1&e&&o.Db(0,"toh-movie",0),2&e&&o.Ob("movie",t.movie)},directives:[d],styles:[""]}),e})();function m(e,t){if(1&e&&(o.Fb(0,"li"),o.Fb(1,"div",3),o.Db(2,"img",4),o.Fb(3,"div",5),o.Fb(4,"h5",6),o.Tb(5),o.Eb(),o.Fb(6,"a",7),o.Tb(7,"Details"),o.Eb(),o.Eb(),o.Eb(),o.Eb()),2&e){const e=t.$implicit;o.tb(2),o.Ob("src",e.poster,o.Qb),o.tb(3),o.Ub(e.title),o.tb(1),o.Ob("routerLink",e.id)}}function p(e,t){if(1&e&&(o.Fb(0,"ul",1),o.Sb(1,m,8,3,"li",2),o.Eb()),2&e){const e=t.ngIf;o.tb(1),o.Ob("ngForOf",e)}}const u=[{path:"",component:(()=>{class e{constructor(e,t){this.movieService=e,this.navbarService=t}ngOnInit(){var e;this.movies$=this.movieService.getMoviesHttp(),null===(e=this.navbarService.title)||void 0===e||e.next("Movie List")}}return e.\u0275fac=function(t){return new(t||e)(o.Cb(c),o.Cb(b.a))},e.\u0275cmp=o.wb({type:e,selectors:[["toh-movie-list"]],decls:2,vars:3,consts:[["class","mt-5",4,"ngIf"],[1,"mt-5"],[4,"ngFor","ngForOf"],[1,"card","ml-2","border-0","bg-transparent",2,"width","15rem"],["alt","poster",1,"rounded",3,"src"],[1,"card-body","bg-transparent","text-light"],[1,"card-title","font-weight-bold"],[1,"btn","btn-primary",3,"routerLink"]],template:function(e,t){1&e&&(o.Sb(0,p,2,1,"ul",0),o.Mb(1,"async")),2&e&&o.Ob("ngIf",o.Nb(1,1,t.movies$))},directives:[n.j,n.i,r.b],pipes:[n.b],styles:["img[_ngcontent-%COMP%]{max-width:300px;height:400px;object-fit:content}ul[_ngcontent-%COMP%]{padding:20px 0}li[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0;justify-content:center}li[_ngcontent-%COMP%]{padding:10px 0}"]}),e})()},{path:":id",component:h}];let v=(()=>{class e{}return e.\u0275mod=o.Ab({type:e}),e.\u0275inj=o.zb({factory:function(t){return new(t||e)},imports:[[r.c.forChild(u)],r.c]}),e})(),g=(()=>{class e{}return e.\u0275mod=o.Ab({type:e}),e.\u0275inj=o.zb({factory:function(t){return new(t||e)},imports:[[n.c,v]]}),e})()}}]);