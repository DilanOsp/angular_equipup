import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserService } from 'src/app/shared/servces/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  mail: string = '';
  password: string = '';


  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    this.userService.getByMail(this.mail).subscribe((data)=>{
      if(data == null){
        //feedback de que el usuario no existe
        console.log('el usuario no existe')
      }else if(data.password == this.password){
        //redirigir al inicio
        console.log('valido') 
      }else{
        //feedback de que la contraseña es incorrecta
        console.log('contraseña incorrecta')
      }


    })
    
    console.log(this.loginForm.value);
  }

}