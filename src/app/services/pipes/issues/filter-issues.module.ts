import { NgModule } from "@angular/core";
import { FilterIssuesByHouse, FilterIssuesByStatus } from "./filter-issues.pipe";
import { OrderByDate } from "./order-by-date.pipe";

@NgModule({
  imports: [],
  declarations: [ FilterIssuesByHouse, FilterIssuesByStatus, OrderByDate ],
  exports: [ FilterIssuesByHouse, FilterIssuesByStatus, OrderByDate ],
})
export class IssueFilters { }
