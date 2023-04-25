import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface categoryResponseModel extends ResponseModel{
    data:Category[]
}