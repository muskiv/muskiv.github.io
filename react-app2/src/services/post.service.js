import {urls} from '../configs/urls';

const getAll = (id) =>{
  return fetch(`${urls.posts}?userId=${id}`)
  .then(value => value.json())
};

export const postService = {getAll};