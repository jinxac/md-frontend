/**
 Author - Harkirat Saluja
 Git - https://bitbucket.org/salujaharkirat/
 **/


"use strict";

import axios from "axios";
import humps from "humps";

axios.defaults.headers.post["Content-Type"] = "application/json";

// const plainAxios = axios.create({});

// const transformedAxios = axios.create({});

const customAxios = axios.create({});

customAxios.defaults.transformResponse = [
  ...axios.defaults.transformResponse,
  data => humps.camelizeKeys(data)
];

customAxios.defaults.transformRequest = [
  data => humps.decamelizeKeys(data),
  ...axios.defaults.transformRequest
];

export default customAxios;
