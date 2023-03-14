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
      localStorage.setItem('role',res.object.role);
      if(res.object.role=="CUSTOMER"){
        console.log(res);
        console.log(this.authService.currentUserCustomer);
      console.log("currentUserCustomer Created")
      this.authService.currentUserCustomer.id = res.object.id;
      this.authService.currentUserCustomer.email= res.object.email;
      this.authService.currentUserCustomer.phone=res.object.phone;
      this.authService.currentUserCustomer.username=res.object.username;
      this.authService.currentUserCustomer.walletLimit=res.object.walletLimit;
      this.authService.currentUserCustomer.dob = res.object.dob;
    } else if(res.object.role=="ADMIN"){
      console.log("currentUserAdmin Created")
      this.authService.currentUserAdmin.email=res.object.email;
      this.authService.currentUserAdmin.id=res.object.id;
      this.authService.currentUserAdmin.phone=res.object.phone;
      this.authService.currentUserAdmin.username=res.object.username;

    } 
      alert(res.message)
      localStorage.setItem('token',res.object.token);
      this.router.navigate(['/home']);
    },error=>{
      console.log(error)
      if(error.status == 403){
        alert("Username or Password is incorrect!")
      };
      console.log(this.alertService.error(error));
    })
  }
}
