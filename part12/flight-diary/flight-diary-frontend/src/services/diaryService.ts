import axios from "axios";
import type { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from "../types";

const baseUrl = '/api/diaries'

export const getDiaries = () => {
  return axios
    .get<NonSensitiveDiaryEntry[]>(baseUrl)
    .then((response) => response.data)
}

export const addDiary = (newDiary: NewDiaryEntry) => {
  return axios
    .post<DiaryEntry>(baseUrl, newDiary)
    .then((response) => response.data)
}

export default {
  getDiaries,
  addDiary
}
