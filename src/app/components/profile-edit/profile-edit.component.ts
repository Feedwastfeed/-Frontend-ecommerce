import { Component } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
profile:Profile;

}
