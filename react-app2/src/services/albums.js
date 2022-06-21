import { urls } from "../configs/urls";
import { axioService } from "./axio.service";

export const albumsService = {
  getAll: (id) => axioService.get(`${urls.users}/${id}/albums`).then(value => value.data),
  getPhotos: (id) => axioService.get(`${urls.albums}/${id}/photos`).then(value =>value.data)
}