import { Component } from '@angular/core';
import { MOCK_ISSUES } from '../../Models/mock-issue'

@Component({
  selector: 'app-issue-feed',
  templateUrl: 'issue-feed.page.html',
  styleUrls: ['issue-feed.page.scss']
})

export class IssueFeed {

  mockIssues = MOCK_ISSUES;

  constructor() {}

}
