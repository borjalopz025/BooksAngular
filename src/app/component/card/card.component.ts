import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() libro:Books
  @Input() par:boolean
  @Output() eliminarLibro = new EventEmitter<number>()

  eliminar():void{
    
    this.eliminarLibro.emit(this.libro.id_book)
    
  }
}
