import { Component, OnInit } from '@angular/core';
import { PatientDashboardService } from '../services/patient-dashboard.service';

@Component({
  selector: 'app-health-indicators',
  templateUrl: './health-indicators.component.html',
  styleUrls: ['./health-indicators.component.scss']
})
export class HealthIndicatorsComponent implements OnInit {
  public patientDashboardWeight: any = null;
  public patientDashboardHeartRate: any = null;
  public patientDashboardBPSystolicDiastolic: any = null;
  public patientDashboardGlucose: any = null;
  public patientDashboardTotalCholesterol: any = null;
  public patientDashboardCholesterolHDLLDL: any = null;

  constructor(
    private patientDashboardService: PatientDashboardService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.patientDashboardService.getWeight().subscribe(data => this.patientDashboardWeight = data);
    this.patientDashboardService.getHeartRate().subscribe(data => this.patientDashboardHeartRate = data);
    this.patientDashboardService.getBPSystolicDiastolic().subscribe(data => this.patientDashboardBPSystolicDiastolic = data);
    this.patientDashboardService.getGlucose().subscribe(data => this.patientDashboardGlucose = data);
    this.patientDashboardService.getTotalCholesterol().subscribe(data => this.patientDashboardTotalCholesterol = data);
    this.patientDashboardService.getCholesterolHDLLDL().subscribe(data => this.patientDashboardCholesterolHDLLDL = data);
  }
}
