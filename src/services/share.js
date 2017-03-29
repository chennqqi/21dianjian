import request from '../utils/request';
import * as urlUtil from '../utils/urlSign';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  const pageUrl = { page, limit: PAGE_SIZE };
  const sign = urlUtil.getparams(urlUtil.urlSign(pageUrl));
  return request(`/api/share/lists?${sign}`);
}

export function audit(id, values) {
  const postData = {};
  postData.shareid = id;
  postData.message = values.message;
  postData.audiotype = values.audiotype;

  return request('/api/share/audio', {
    method: 'POST',
    body: JSON.stringify(urlUtil.urlSign(postData)),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
