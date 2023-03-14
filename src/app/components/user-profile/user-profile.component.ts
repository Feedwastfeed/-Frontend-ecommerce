import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  profile:Profile;
  constructor(private profileService:ProfileService){}
  ngOnInit(): void {
    this.profileService.getCustomerById().subscribe(
      response=>{
        this.profile=response.data;
        console.log(response);
        console.log(this.setGender());
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
  display = false;
  onPress() {
    
    this.display = !this.display;
  }
}
