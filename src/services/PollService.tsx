import React from "react";
import { PollType } from "../components/PollTileCard";
import axios from "axios";

const baseURL = `http://localhost:${process.env.PORT || 4000}/api`;

export const getByID = (id: string) => {
  return axios({
    method: "GET",
    url: `${baseURL}/polls/${id}`,
  });
};

export const getAll = () => {
  return axios({
    method: "GET",
    url: `${baseURL}/polls`,
  });
};

export const create = (poll: PollType) => {
  return axios({
    method: "POST",
    url: `${baseURL}/polls`,
    data: poll,
  });
};

export const update = (id: string, poll: PollType) => {
  console.log(JSON.stringify(poll));
  return axios({
    method: "PUT",
    url: `${baseURL}/polls/${id}`,
    data: poll,
  });
};

export const deleteByID = (id: string) => {
  return axios({
    method: "DELETE",
    url: `${baseURL}/polls/${id}`,
  });
};

export const deleteAll = () => {
  return axios({
    method: "DELETE",
    url: `${baseURL}/polls`,
  });
};
