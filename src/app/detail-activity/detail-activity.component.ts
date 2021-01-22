import { Component, OnInit } from '@angular/core';
import { ActivityModel } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css']
})
export class DetailActivityComponent implements OnInit {

  public id: string | null;
  public activity: ActivityModel = {};
  constructor(private route: ActivatedRoute, private activityService: ActivityService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.activity.employee = { name: '', lastName: '' };
  }

  ngOnInit(): void {
    this.sync()
  }

  sync() {
    if (this.id != null) {
      this.activityService.getActivityById(this.id)
        .subscribe(
          data => {
            this.activity = data
            console.log(data)
          }
        )
    }
  }

  actualizar(): void {
    if (this.id != null) {
      this.activityService.updateActivity(this.id, this.activity).subscribe();
    }
  }

}
