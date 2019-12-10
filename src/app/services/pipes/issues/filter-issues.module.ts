import { NgModule } from "@angular/core";
import { FilterIssuesByHouse, FilterIssuesByStatus } from "./filter-issues.pipe";

@NgModule({
  imports: [],
  declarations: [ FilterIssuesByHouse, FilterIssuesByStatus ],
  exports: [ FilterIssuesByHouse, FilterIssuesByStatus ],
})
export class IssueFilters { }
