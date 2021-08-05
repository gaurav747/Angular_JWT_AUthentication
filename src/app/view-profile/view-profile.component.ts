import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Profile from "../model"
import { UserProfileServiceService } from '../user-profile-service.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  public profiles: Profile
  // profiles: Profile[] = []
  constructor(private profile1: UserProfileServiceService) { }

  ngOnInit(): void {
    this.profile1.profile().subscribe((response) => {
      if (response.statuscode == 200) {
        this.profiles = response.data as Profile;
        console.log(this.profiles)
      } else {
        alert(response.message)
      }
    })
  }

}
