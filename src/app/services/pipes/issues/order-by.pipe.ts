import { Pipe, PipeTransform } from "@angular/core";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";

@Pipe({ name: "OrderByDate"})
export class OrderByDate implements PipeTransform {
  transform(issues: IIssueResponse[]) {
    return issues.sort((a, b) => {
      return (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    });
  }
}

@Pipe({ name: "OrderByDatePriority"})
export class OrderByDatePriority implements PipeTransform {
  transform(issues: IIssueResponse[]) {
    return issues.sort((a, b) => {
      const aDate = new Date(a.createdAt);
      const bDate = new Date(b.createdAt);

      if (a.priority === b.priority) {
        return (aDate < bDate) ? 1 : aDate > bDate ? -1 : 0;
      } else {
        return (a.priority < b.priority) ? 1 : -1;
      }
    });
  }
}
