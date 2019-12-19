import { NgModule } from "@angular/core";
import { FilterIssuesByHouse, FilterIssuesByStatus } from "./filter-issues.pipe";
import { OrderByDate, OrderByDatePriority } from "./order-by.pipe";

@NgModule({
  imports: [],
  declarations: [ FilterIssuesByHouse, FilterIssuesByStatus, OrderByDate, OrderByDatePriority],
  exports: [ FilterIssuesByHouse, FilterIssuesByStatus, OrderByDate, OrderByDatePriority ],
})
export class IssueFilters { }
