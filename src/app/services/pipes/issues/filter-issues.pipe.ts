import { Pipe, PipeTransform } from "@angular/core";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";
import IHouseResponse from "src/app/models/response/landlord/house-response.interface";

@Pipe({ name: "FilterIssuesByHouse" }) 
export class FilterIssuesByHouse implements PipeTransform {
  transform(issues: IIssueResponse[], currentHouse: IHouseResponse) {
    if (currentHouse.id == null) {
      return issues;
    }
    return issues.filter((element, index, array) => element.house.id === currentHouse.id);
  }
}

@Pipe({ name: "FilterIssuesByStatus" }) 
export class FilterIssuesByStatus implements PipeTransform {
  transform(issues: IIssueResponse[], isResolved: boolean) {
    return issues.filter((issue, index, array) => issue.isResolved === isResolved);
  }
}
