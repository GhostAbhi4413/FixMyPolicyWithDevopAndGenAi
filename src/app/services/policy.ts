
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private apiURL = 'https://flxszvzxx67o5cjkdcmbhboe5a0qmegh.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.apiURL, formData);
  }

  analyzeText(text: string): Observable<any> {
    return this.http.post(this.apiURL, { text });
  }
}

