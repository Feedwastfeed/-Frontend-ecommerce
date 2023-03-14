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
  public authCredentialsDto: FormGroup;
  showPass = true;
  
  constructor(
    private authService:AuthService,
    private router:Router,
    private formBuilder: FormBuilder,
    private alertService:AlertService,
    
    ){}
  ngOnInit(): void {
  
    
    this.authCredentialsDto= this.formBuilder.group({
      userName: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(25)]),
      password: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)])
    });
  }
 

  submit(){ 
   console.log(this.authCredentialsDto.getRawValue())
    this.authService.login(this.authCredentialsDto.getRawValue())
    .subscribe((res:any)=>{
      localStorage.setItem('role',res.object.role);
      localStorage.setItem('id',res.object.id)
      localStorage.setItem('email',res.object.email)
      localStorage.setItem('phone',res.object.phone)
      localStorage.setItem('username',res.object.username)
      if(res.object.role=="CUSTOMER"){
      
        localStorage.setItem('walletLimit',res.object.walletLimit);
        localStorage.setItem('dob',res.object.dob);
        localStorage.setItem('walletLimit',res.object.walletLimit);
      console.log("currentUserCustomer Created")
      
    } else if(res.object.role=="ADMIN"){
      console.log("currentUserAdmin Created")
   
    } 
      alert(res.message)
      localStorage.setItem('token',res.object.token);
      this.authService.saveData() ;
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
