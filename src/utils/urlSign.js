/**
 * Created by fujinliang on 17/3/28.
 */

const crypto = require('crypto');

String.prototype.md5 = function () {
  const md5 = crypto.createHash('md5');
  md5.update(this.toString(), 'utf8');
  return md5.digest('hex');
};

export function urlSign(params) {
  let s = '';
  const timestamp = Date.now();
  params.timestamp = timestamp;
  Object.keys(params).sort().map((key) => {
    s = `${s + key}=${params[key]}&`;
    params[key] = encodeURIComponent(params[key]);
  });
  s = s.substring(0, s.length - 1).md5();
  params.sign = s;
  return params;
}


export function getparams(params) {
  let s = '';
  Object.keys(params).sort().map((key) => {
    s = `${s + key}=${params[key]}&`;
  });
  s = s.substring(0, s.length - 1);
  return s;
}

