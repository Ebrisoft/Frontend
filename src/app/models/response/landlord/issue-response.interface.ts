import IHouseResponse from "./house-response.interface";
import IUserResponse from "../common/user-response.interface";
import { Priority } from "src/app/utils/priority.enum";

export default interface IIssueResponse {
  title: string;
  content: string;
  createdAt: string;
  isResolved: boolean;
  author: IUserResponse;
  house: IHouseResponse;
  priority: Priority;
}
