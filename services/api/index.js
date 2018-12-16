import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const API_URL_BASE = publicRuntimeConfig.apiUrlBase;

export const defaultRequestOptions = {
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};
