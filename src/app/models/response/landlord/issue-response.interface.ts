import IHouseResponse from "./house-response.interface";

export default interface IIssueResponse {
  content: string;
  house: IHouseResponse;
}
