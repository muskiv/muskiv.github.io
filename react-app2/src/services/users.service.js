import { urls } from "../configs/urls";
import { axioService } from "./axio.service";

export const usersService = {
  getAll:()=> axioService.get(urls.users).then(value => value.data),
  getUserId:(id)=> axioService.get(`${urls.users}/${id}`).then(value => value.data),
  getUserPosts:(id)=> axioService.get(`${urls.users}/${id}/posts`).then(value => value.data)
}