/* eslint-disable no-param-reassign */
import Axios from 'axios';
import { getSession } from 'next-auth/react';

const shoko = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_SHOKO_API_URL,
  headers: {
    'api-key': process.env.NEXT_PUBLIC_SHOKO_API_KEY,
  }
});

// intercepts any HTTP request | adds Bearer token if the session is active
shoko
  .interceptors
  .request
  .use(
    async (config) => {
      const session = await getSession();
      if (session) {
        const { token } = session;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      }
      delete config.headers.Authorization;
      return config;
    },
    (error) => Promise.reject(error)
  );

export default shoko;
