import axios from "axios";

export async function searchUser(param) {
  var config = {
    method: 'get',
    url: 'https://api.github.com/search/users',
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  };

  if (param) {
    config.params = parseObjectToQueryParam(param);
  }

  return await axios(config);
}


export function parseObjectToQueryParam(obj) {
  let queryParams = new URLSearchParams();
  if (obj) {
    for (let attr in obj) {
      queryParams.append(attr, obj[attr]);
    }
  }
  return queryParams;
}
