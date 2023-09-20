import { Injectable } from '@angular/core';
import { Books } from '../models/books';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  public books :Books[]
  private url:string = 'http://localhost:3000/libro'

  constructor( private http: HttpClient) {
    this.books = [
      new Books("como engañar a un ladron","Tapa blanda","German Artegoitia",20,"https://oxigenoalavida.files.wordpress.com/2013/11/si-vienes-a-robar-mi-vecino-es-rico.jpg",1),
      new Books("El gato que le gusta el agua","Tapa blanda","Alvaro caravaca",15,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrf5XzrTECvT17TS1XgRLLDo7qDAO2UTO5A&usqp=CAU",2),
      new Books("El ciego casimiro","Tapa blanda","Casimiro gonzalez ",35,"https://s3.ppllstatics.com/diariovasco/www/pre2017/multimedia/noticias/201603/19/media/broma-youtuber--575x323.jpg",3),
      new Books("Playa sin arena","Tapa blanda","Gonzalo perez",19.99,"https://www.lavanguardia.com/files/image_449_220/uploads/2021/12/30/61cd8c72af32c.jpeg",4),

    ]
   }

  getAll()
  {
    let url:string = this.url

    if(this.books)
    {
      url += this.books
    }
      return this.http.get(url)
  }

  getOne(id:number)
  {
    return this.http.get( this.url + '/'+ id)
   
  }

  add(book:Books){
   return this.http.put(this.url,book)
  }

  edit(book:Books)
  {
    return this.http.put(this.url,book)
  }

  delete(id_book:number){
   return this.http.request('delete' , this.url, { body: { id_book:id_book}})
  }

  eliminar(num:number){
    let url:string = this.url

    url +=  this.books.filter(val=> val.id_book !== num)

    return this.http.request('delete' , url, { body: { id_book:num}})
  }
}
