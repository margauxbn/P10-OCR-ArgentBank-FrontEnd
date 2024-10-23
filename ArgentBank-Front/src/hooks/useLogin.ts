import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useAuth } from './useAuth';

// base url
const api = axios.create({
  baseURL: "http://localhost:3001"
});

interface LoginResponse {
  body: {
    token: string
  }
}

export const useLogin = () => {
  const [hasError, setHasError] = useState(false);
  const { dispatchSetEmail, dispatchSetToken } = useAuth();

  const login = async (email: string, password: string) : Promise<void> => {
    try {
      const response : AxiosResponse<LoginResponse> = await api.post('/api/v1/user/login', {
        email,
        password
      });
      dispatchSetEmail(email);
      dispatchSetToken(response.data.body.token);
    } catch (error) {
      setHasError(true);
      console.log(error);
    }
  };

  return {
    login,
    hasError
  }
}