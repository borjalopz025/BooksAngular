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
   

    constructor(private libroService: BooksService, private http:HttpClient){
      this.books = []
      this.libroService.getAll().subscribe((data:any) =>{
      console.log(data.data)
      this.books = data.data
   
    })

  }
    
    // hacer un if 
     clicar(num):void{
      console.log(num);
      
      if(num != null &&  !Number.isNaN(num))
      {
        console.log('entro a getOne');
        
        this.libroService.getOne(num).subscribe((data:any) =>
        {
          console.log(data);
          this.books= data.data

        })
      }else{
        console.log('respuesta -1');
       
        this.libroService.getAll().subscribe((data:any)=>
        {
          console.log(data);
          this.books= data.data
        
        })
      }

      
      
    }
   
   
   idEliminar(num:number):void{
   
    this.books =  this.books.filter(val=> val.id_book !== num)
    this.libroService.delete(num).subscribe((data) =>{
      console.log(data);
      
    })

  
  
  }
   
}
