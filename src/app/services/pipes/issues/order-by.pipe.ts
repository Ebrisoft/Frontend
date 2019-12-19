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

      if (aDate.getFullYear() === bDate.getFullYear() && aDate.getMonth() === bDate.getMonth() && aDate.getDate() === bDate.getDate()) {
        return (a.priority < b.priority) ? 1 : (a.priority > b.priority) ? -1 : 0;
      } else {
          return (aDate < bDate) ? 1 : -1;
      }
    });
  }
}
