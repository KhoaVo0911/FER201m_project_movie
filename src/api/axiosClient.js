import axios from "axios";
//ec2-13-212-157-122
axios.defaults.baseURL =
  "https://647097ab3de51400f72493f6.mockapi.io";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.delete["Access-Control-Allow-Origin"] = "*";

export const axiosClient = {
  getByUrl(url) {
    return axios.get(`${url}`).catch((error) => console.log(error));
  },

  get(url, slug = "") {
    return axios.get(`${url}/${slug}`).catch((error) => console.log(error));
  },

  getWithId(url, slug = "") {
    return axios.get(`${url}`, `${slug}`).catch((error) => console.log(error));
  },

  get2(url, params) {
    return axios.get(`${url}`, params).catch((error) => console.log(error));
  },

  get3(url, config) {
    return axios.get(url, config).catch((error) => console.log(error));
  },

  getWithFilter(url, slug = "", params) {
    return axios
      .get(`${url}/${slug}`, params)
      .catch((error) => console.log(error));
  },

  getWithFilterMiddleId(url, slug = "", url2, params) {
    return axios
      .get(`${url}/${slug}/${url2}`, params)
      .catch((error) => console.log(error));
  },

  getMiddleParams(url, slug = "", url2) {
    return axios
      .get(`${url}/${slug}/${url2}`)
      .catch((error) => console.log(error));
  },

  query(url) {
    return axios.get(`${url}`).catch((error) => console.log(error));
  },

  post(url, params, config) {
    return axios.post(`${url}`, params, config);
  },
  postWithId(url, slug, params, config) {
    return axios.post(`${url}/${slug}`, params, config);
  },

  postWith2Id(url, slug = "", url2, slug2 = "", params) {
    return axios.post(`${url}/${slug}/${url2}/${slug2}`, params);
  },

  postMiddleId(url, slug, url2, params, config) {
    return axios.post(`${url}/${slug}/${url2}`);
  },

  postFile(url, params, config) {
    return axios.post(`${url}`, params, {headers: { "Content-Type": "multipart/form-data" }});
  },

  put(url, params, config) {
    return axios.put(`${url}`, params, config);
  },

  put2(url, body){
    return axios.put(`${url}`, body);
  },

  putWithId(url, slug) {
    return axios.put(`${url}/${slug}`);
  },

  putWithMiddleId(url, slug = "", url2) {
    return axios.put(`${url}/${slug}/${url2}`);
  },

  putMiddleParams(url, params, url2, slug) {
    return axios.put(`${url}`, params, `${url2}`, slug);
  },

  delete(url, params, config) {
    return axios.delete(`${url}`, params, config);
  },

  deleteWithId(url, slug = "") {
    return axios.delete(`${url}/${slug}`);
  },

  delete2(url, params) {
    return axios.delete(url, params);
  },

  saveToken(token, expired) {
    window.localStorage.setItem("access_token", JSON.stringify(token));
  },

  getToken() {
    if (typeof window === "undefined") {
      return null;
    }

    return window.localStorage.getItem("access_token")
      ? JSON.parse(window.localStorage.getItem("access_token"))
      : "";
    // return window.localStorage.StorageKeys.TOKEN ? JSON.parse(window.localStorage.StorageKeys.TOKEN) : "";
  },

  setHeaderAuth(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  clearToken() {},
};

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },

  function (error) {
    // const { config, status, data } = error.response;
    // console.log("error", { data });
    // const errorMsg = data.message || {};
    // console.log(errorMsg);
    // throw new Error(errorMsg);
    return Promise.reject(error.response);
  }
);

export default axiosClient;
