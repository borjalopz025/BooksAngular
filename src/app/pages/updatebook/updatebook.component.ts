import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {

  public books : Books[]

  constructor(private bookservice: BooksService, private router: Router){
    this.books= this.bookservice.books
   
    
  }

  public add(titulo:string, tapa:string, autor: string, precio:number,photo:string,codigo:number){
   
    this.bookservice.edit(new Books(titulo,tapa,autor,precio,photo,codigo))
    
    this.router.navigateByUrl("/books")
  }
  

}
