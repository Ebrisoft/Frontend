import IUserResponse from "../common/user-response.interface";

export default interface IIssueResponse {
  title: string;
  content: string;
  createdAt: string;
  isResloved: boolean;
  author: IUserResponse;
}
