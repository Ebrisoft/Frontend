import IUserResponse from "../common/user-response.interface";

export default interface IIssueResponse {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  isResolved: boolean;
  author: IUserResponse;
}
