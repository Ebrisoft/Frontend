import IUserResponse from "../common/user-response.interface";

export default interface IIssueResponse {
  tile: string;
  content: string;
  createdAt: string;
  isResloved: boolean;
  aurthor: IUserResponse;
}
