import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 authRegistrationDto: FormGroup;

 constructor(
  private authService:AuthService,
  private router:Router,
  private formBuilder: FormBuilder,
  private alertService:AlertService
  
  ){}
  ngOnInit(): void {
  
    
    this.authRegistrationDto= this.formBuilder.group({
      userName: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
      isMale: new FormControl(null,Validators.required)
    });
  }
  getUsername(){
    return  this.authRegistrationDto.get
  }
  submit(){
    

    console.log(this.authRegistrationDto.value);
    this.authService.register(this.authRegistrationDto.getRawValue())
    .subscribe((res:any)=>{
      console.log(res);
      this.router.navigate(['/home']);
    },error =>{
      console.log(error);
    })
  }
}