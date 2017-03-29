/**
 * Created by fujinliang on 17/3/28.
 */
import request from '../utils/request';
import * as urlUtil from '../utils/urlSign';

export function login(values) {
  return request('/api/users/login', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(urlUtil.urlSign(values)),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
