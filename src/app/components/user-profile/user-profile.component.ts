import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Profile } from 'src/app/models/profile';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  profile:Profile;
  profileAddress:Address [];
  constructor(private profileService:ProfileService ,private authService:AuthService){}

  ngOnInit(): void {
    this.profileService.getCustomerById().subscribe(
      response=>{
        this.profile=response.data;
      }
    );
    this.profileService.getCustomerAddressById().subscribe(
      response=>{
        this.profileAddress=response.data;
      }
    );
    }

  setGender():String {
    if(this.profile.isMale)
    {
      const gender="Male";
      return gender;
    }
    else
    {
      const gender="Female";
      return gender;
    }
  }
  
}
