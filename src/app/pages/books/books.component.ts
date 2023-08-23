import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
     
    public books:Books[]
   

    constructor(){
  
      this.books = [
        new Books("como engañar a un ladron","Tapa blanda","German Artegoitia",20,"https://oxigenoalavida.files.wordpress.com/2013/11/si-vienes-a-robar-mi-vecino-es-rico.jpg",77654, 99389,),
        new Books("El gato que le gusta el agua","Tapa blanda","Alvaro caravaca",15,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrf5XzrTECvT17TS1XgRLLDo7qDAO2UTO5A&usqp=CAU",775697, 99747),
        new Books("El ciego casimiro","Tapa blanda","Casimiro gonzalez ",35,"https://s3.ppllstatics.com/diariovasco/www/pre2017/multimedia/noticias/201603/19/media/broma-youtuber--575x323.jpg",77654, 99419),
        new Books("Playa sin arena","Tapa blanda","Gonzalo perez",19.99,"https://www.lavanguardia.com/files/image_449_220/uploads/2021/12/30/61cd8c72af32c.jpeg",99654, 993559),

      ]
    }
    
    agregar(Title:HTMLInputElement,tipo:HTMLInputElement,author:HTMLInputElement,price:HTMLInputElement,photo:HTMLInputElement,codigo:HTMLInputElement ,id_usuario:HTMLInputElement){
      let nuevoLibro =  new Books (Title.value,tipo.value,author.value,price.valueAsNumber,photo.value,codigo.valueAsNumber,id_usuario.valueAsNumber)
      this.books.push(nuevoLibro)
      console.log(nuevoLibro);
      
      
   }
   
}
