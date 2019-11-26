import IIssueResponse from "./issue-response.interface";

export default interface IHouseResponse {
  name: string;
  issues: IIssueResponse[];
}
