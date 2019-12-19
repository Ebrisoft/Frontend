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
