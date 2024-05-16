import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from '../classes/announcement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  announcements: Announcement[];

  constructor(
    private router: Router,
    private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getAllAnnouncements();
  }

  getAllAnnouncements(){
    this.dashboardService.listAllAnnouncements()
    .subscribe(data => {
      this.announcements = data;
    })
  }

}
