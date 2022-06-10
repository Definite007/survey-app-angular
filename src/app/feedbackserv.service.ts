import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackservService {
  readonly APIUrl = "http://localhost:8000"

  constructor(private http: HttpClient) { }

  newFeedback(val: any): Observable<any>{
    return this.http.post(this.APIUrl, val)
  }

}