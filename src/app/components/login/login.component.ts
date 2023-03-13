import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenInterceptorService } from 'src/app/services/auth/token-interceptor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  authCredentialsDto: FormGroup;
  
  constructor(
    private authService:AuthService,
    private router:Router,
    private formBuilder: FormBuilder,
    private alertService:AlertService,
    
    ){}
  ngOnInit(): void {
    
    this.authCredentialsDto= this.formBuilder.group({
      userName: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    });
  }
 

  submit(){ 
   console.log(this.authCredentialsDto.getRawValue())
    this.authService.login(this.authCredentialsDto.getRawValue())
    .subscribe((res:any)=>{
      console.log(this.authCredentialsDto.value);
      console.log("LOGIN TOKENNNN !!!"+res.token);
      localStorage.setItem('tokensad',res.token);
      this.router.navigate(['/home']);
    })
  }
}
