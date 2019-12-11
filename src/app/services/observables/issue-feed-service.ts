import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class IssueFeedService {

  private subject = new Subject();

  triggerUpdate() {
    this.subject.next();
  }

  getSubject(): Observable<any> {
    return this.subject.asObservable();
  }
}
