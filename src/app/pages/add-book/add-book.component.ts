import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
    
  public books:Books[]

  constructor( private book2:BooksService){
    this.books = this.book2.books
  }

  agregar(Title:HTMLInputElement,tipo:HTMLInputElement,author:HTMLInputElement,price:HTMLInputElement,photo:HTMLInputElement,codigo:HTMLInputElement ){
     let nuevoLibro =  new Books (Title.value,tipo.value,author.value,price.valueAsNumber,photo.value,codigo.valueAsNumber)
    // this.books.push(nuevoLibro)
    // console.log(nuevoLibro);
    this.book2.add(nuevoLibro)
  }
   
}
