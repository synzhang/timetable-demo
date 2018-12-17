import fetch from 'cross-fetch';
import { merge } from 'lodash';
import { API_URL_BASE, defaultRequestOptions } from '@/services/api';

const coursesUrl = `${API_URL_BASE}/courses`;

export const fetchCourses = () => {
  return fetch(coursesUrl, defaultRequestOptions)
    .then(response => response.json())
};

export const createCourse = (data) => {
  let requestOptions = merge({}, defaultRequestOptions, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return fetch(coursesUrl, requestOptions)
    .then(response => response.json())
};

export const updateCourse = (data) => {
  let requestOptions = merge({}, defaultRequestOptions, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });

  return fetch(coursesUrl, requestOptions)
    .then(response => response.json())
};
