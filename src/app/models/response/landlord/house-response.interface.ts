import IIssueResponse from "./issue-response.interface";

export default interface IHouseResponse {
  id: number;
  name: string;
  issues: IIssueResponse[];
}
