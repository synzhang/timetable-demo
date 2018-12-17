import fetch from 'cross-fetch';
import { merge } from 'lodash';
import { API_URL_BASE, defaultRequestOptions } from '@/services/api';

const teachersUrl = `${API_URL_BASE}/teachers`;

export const fetchTeachers = () => {
  return fetch(teachersUrl, defaultRequestOptions)
    .then(response => response.json())
};

export const createTeacher = (data) => {
  let requestOptions = merge({}, defaultRequestOptions, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return fetch(teachersUrl, requestOptions)
    .then(response => response.json())
};

export const updateTeacher = (data) => {
  let requestOptions = merge({}, defaultRequestOptions, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });

  return fetch(teachersUrl, requestOptions)
    .then(response => response.json())
};
