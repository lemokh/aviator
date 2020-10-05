import { newsActionTypes } from "./news.types";

export const createNews = data => ({
  type: newsActionTypes.CREATE_NEWS,
  payload: data
});

export const editNews = data => ({
  type: newsActionTypes.EDIT_NEWS,
  payload: data
});

export const deleteNews = id => ({
  type: newsActionTypes.DELETE_NEWS,
  payload: id
});
