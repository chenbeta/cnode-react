import axios from 'axios';
import Qs from 'qs';

const URL = 'https://cnodejs.org/api/v1';
window.URL = URL;

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break;
        case 404:
          console.log('服务异常，请求失败');
          break;
        default:
          console.log('服务异常，请求失败');
          break;
      }
    }
    return Promise.reject(error.response.data);
  }
);

const axiosType = (type, path, data, option) => {
  const upperType = type.toUpperCase();
  let axData = {
    url: URL + path
  };
  switch (upperType) {
    case 'GET':
      data.t = new Date().getTime();
      axData.type = type;
      axData.params = data;
      break;
    case 'POST':
      if (!option.noQs) {
        data = Qs.stringify(data);
      }
      axData.type = type;
      axData.data = data;
      break;
    default:
      break;
  }
  return axios(axData)
    .then(res => {
      return res.data;
    })
    .catch(err => {});
};

export const $http = {
  get: (url, data = {}, option = {}) => {
    return axiosType('get', url, data, option);
  },
  post: (url, data = {}, option = {}) => {
    return axiosType('post', url, data, option);
  }
};

export default axios;
