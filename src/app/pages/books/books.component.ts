import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
     
    public books:Books[]
   

    constructor(private libro : BooksService){

      this.books = this.libro.books
      
  
     
    }
    // hacer un if 
    public clicar(num:number){
      let click =this.books.findIndex(val => val.id_book === num)
      if(click !== -1){
        this.books = this.libro.getOne(num)
      
      }else {
       console.log(
        this.books = this.libro.getAll())
        console.log(click);
        
      }
      
    }
   
   
   idEliminar(num:number):void{
    this.libro.eliminar(num)
    this.books =  this.books.filter(val=> val.id_book !== num)
  
  
  }
   
}
