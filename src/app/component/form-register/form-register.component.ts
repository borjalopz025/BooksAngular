import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm:FormGroup;

    
  constructor( private formBuilder:FormBuilder){
   this.buildForm()
  }
  
  public register(): void
  {
    console.log(this.myForm.value);
    
  }
  
  private buildForm(){
    const minPssLength = 0;

    this.myForm = this.formBuilder.group({
      nombre:[,[Validators.required]],
      apellido:[,[Validators.required]],
      email:[,[Validators.required, Validators.email]],
      url:[,[Validators.required]],
      password:[,[Validators.required,Validators.minLength(minPssLength)]],
      password2:[,[Validators.required, this.checkPaasword ]]
    })
  }

  public checkPaasword(control:AbstractControl){

      let resultado ={matchPassword: true};

      if(control.parent?.value.password == control.value)
      resultado= null
      return resultado
  }
}


