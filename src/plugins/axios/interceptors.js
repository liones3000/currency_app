// function setParams(config) {
//   const params = config.params || {};
//   config.params = Object.assign(params, {
//     access_key: process.env.VUE_APP_API_KEY,
//     source: "UAH"
//   });
//   return config;
// }

function returnData(response) {
  return response.data;
}

export default function(axios) {
  // axios.interceptors.request.use(setParams);
  axios.interceptors.response.use(returnData);
}
