import { urls } from "../configs/urls";
import { axioService } from "./axio.service";

export const postService = {
  getAll:()=>axioService.get(urls.posts).then(value => value.data),
  getById:(id)=> axioService.get(`${urls.posts}/${id}`).then(value => value.data)
}