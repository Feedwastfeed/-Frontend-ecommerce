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
  showPass = true;
  
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
      console.log(res.object.username);
      localStorage.setItem('username',res.object.username);
     
       localStorage.setItem('role',res.object.role);
      localStorage.setItem('ID', res.object.id);
      alert(res.message)
      console.log(res)
      console.log(res.object.token);
  
      localStorage.setItem('token',res.object.token);
      this.router.navigate(['/home']);
    },error=>{
      console.log(error)
      if(error.status == 403){
        alert("Username or Password is incorrect!")
      };
      this.alertService.error(error);
    })
  }
}
