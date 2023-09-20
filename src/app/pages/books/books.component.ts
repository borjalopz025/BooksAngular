import { HttpClient } from '@angular/common/http';
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
   

    constructor(private libro : BooksService, private http:HttpClient){

      this.books = this.libro.books
      
  
     
    }
    // hacer un if 
    public clicar(num:number){
      let click =this.books.findIndex(val => val.id_book === num)
      if(click !== -1){
        this.libro.getOne(num).subscribe((data)=> {
          console.log(data);
          
        })
      
      }else {
        this.libro.getAll().subscribe((data) =>{
          console.log(data);
          
        })
      }
      
    }
   
   
   idEliminar(num:number):void{
   
    this.books =  this.books.filter(val=> val.id_book !== num)
    this.libro.eliminar(num).subscribe((data) =>{
      console.log(data);
      
    })

  
  
  }
   
}
