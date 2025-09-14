
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private resultSubject = new BehaviorSubject<any>(null);
  result$ = this.resultSubject.asObservable();

  setResult(result: any) {
    this.resultSubject.next(result);
  }
}
