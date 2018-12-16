import fetch from 'cross-fetch';
import { merge } from 'lodash';
import { API_URL_BASE, defaultRequestOptions } from '@/services/api';

const schedulesUrl = `${API_URL_BASE}/schedules`;

export const fetchSchedules = () => {
  return fetch(schedulesUrl, defaultRequestOptions)
    .then(response => response.json())
};

export const createSchedule = (data) => {
  let requestOptions = merge({}, defaultRequestOptions, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return fetch(schedulesUrl, requestOptions)
    .then(response => response.json())
};
