import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    public user:User

    constructor(){
      this.user = new User( 7777 , "alvaro" , "fernandez" , "alvaroRexulon@gmail.com" , "https://okdiario.com/img/2023/07/10/brad-pitt--635x358.jpg",  "aguitasala")
                          
    }

    modificar(name:HTMLInputElement, last_name:HTMLInputElement, email:HTMLInputElement,photo:HTMLInputElement ){
      this.user.name = name.value;
      this.user.last_name = last_name.value;
      this.user.email = email.value;
      this.user.photo = photo .value;
    }
}  
