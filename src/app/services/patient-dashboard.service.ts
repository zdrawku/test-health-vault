import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientDashboardService {
  constructor(
    private http: HttpClient
  ) { }

  public getWeight(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/b8fb8833-7e2c-4a84-e611-08daf8ae6744");
  }

  public getHeartRate(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/43cfd6ae-a6db-42b5-e610-08daf8ae6744");
  }

  public getBPSystolicDiastolic(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/16761321-7913-4d05-e616-08daf8ae6744");
  }

  public getGlucose(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/e1b52986-0c42-4ee1-e617-08daf8ae6744");
  }

  public getTotalCholesterol(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/2f36bf07-125a-4301-e612-08daf8ae6744");
  }

  public getCholesterolHDLLDL(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/a1863711-3edb-42ae-e613-08daf8ae6744");
  }
}
