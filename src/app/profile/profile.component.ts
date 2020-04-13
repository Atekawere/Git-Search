import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../profile-service/profile.service"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private profileService:ProfileService) {
    this.profileService.getprofileInfo().subscribe(profile => {
      console.log(profile);
    });
   }

  ngOnInit() {
  }

}
