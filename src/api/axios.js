import axios from "axios";
import humps from "humps";

axios.defaults.headers.post["Content-Type"] = "application/json";

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
