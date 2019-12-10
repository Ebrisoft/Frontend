import { Pipe, PipeTransform } from "@angular/core";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";
import IHouseResponseTenant from "src/app/models/response/landlord/house-response.interface";

@Pipe({ name: "FilterIssues" }) 
export class FilterIssuesPipe implements PipeTransform {
  transform(issues: IIssueResponse[], currentHouse: IHouseResponseTenant) {
    if (currentHouse == null) {
      return issues;
    }
    return issues.filter((element, index, array) => element.house.id === currentHouse.id);
  }
}
