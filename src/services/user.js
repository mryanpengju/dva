import * as fetchs from '../utils/fetch';

// 用户登录地址
export async function login(params){
  var data = await fetchs.create(fetchs.APIHost+"/login",params);
   var json = data.json();
   return json;
}

