import { Injectable } from '@angular/core';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  public books :Books[]
  constructor() {
    this.books = [
      new Books("como engañar a un ladron","Tapa blanda","German Artegoitia",20,"https://oxigenoalavida.files.wordpress.com/2013/11/si-vienes-a-robar-mi-vecino-es-rico.jpg",1),
      new Books("El gato que le gusta el agua","Tapa blanda","Alvaro caravaca",15,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrf5XzrTECvT17TS1XgRLLDo7qDAO2UTO5A&usqp=CAU",2),
      new Books("El ciego casimiro","Tapa blanda","Casimiro gonzalez ",35,"https://s3.ppllstatics.com/diariovasco/www/pre2017/multimedia/noticias/201603/19/media/broma-youtuber--575x323.jpg",3),
      new Books("Playa sin arena","Tapa blanda","Gonzalo perez",19.99,"https://www.lavanguardia.com/files/image_449_220/uploads/2021/12/30/61cd8c72af32c.jpeg",4),

    ]
   }

  getAll():Books[]{
   return this.books;
   
    
  }

  getOne(id_book:number):Books[]{

  return  this.books.filter(val => val.id_book === id_book)
   
  }

  add(book:Books){
   return this.books.push(book)
  }

  edit(book:Books){
   let cambio= this.books.findIndex(val => val.id_book === book.id_book );
   if(cambio !== -1){
    this.books[cambio] = book
    return true;
    

   }else{
    return false

   }
  }

  delete(id_book:number):boolean{
    let borrar =this.books.findIndex(val => val.id_book === id_book)
    if(borrar !== -1){
      this.books.filter(val => val.id_book == id_book)
      return true
    }else {
      return false
    }
  }

  eliminar(num:number):void{
    this.books =  this.books.filter(val=> val.id_book !== num)
  }
}
