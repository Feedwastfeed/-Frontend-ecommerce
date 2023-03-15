import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
  authRegistrationDto: FormGroup;
  showPass=true;
 
  constructor(
   private authService:AuthService,
   private router:Router,
   private formBuilder: FormBuilder,
   private alertService:AlertService,
   public dialog:MatDialog
   ){}
   ngOnInit(): void {
     
   
     
     this.authRegistrationDto= this.formBuilder.group({
       userName: new FormControl(null,[Validators.required,Validators.minLength(5)]),
       password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
       email: new FormControl(null,[Validators.required,Validators.email]),
       phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
       isMale: new FormControl(null)
     });
   }
   getUsername(){
     return  this.authRegistrationDto.get
   }
   submit(){
 
     console.log(this.authRegistrationDto.value);
      this.authService.adminRegister(this.authRegistrationDto.getRawValue())
      .subscribe((res:any)=>{
       if(res.status==false){
        console.log(res);
        this.authService.openDialog(res.message);
       }else{
        this.authService.openDialog(res.message);
        this.router.navigate(['/login']);
 
       }
      },error =>{
        alert("Username Already Taken");
        console.log(error);
      })
   }
  

}
