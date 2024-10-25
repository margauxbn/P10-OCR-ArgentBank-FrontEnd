import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';

// base url
const api = axios.create({
  baseURL: "http://localhost:3001"
});

interface ProfileResponse {
  body: {
    firstName: string;
    lastName: string;
    userName: string;
  }
}

export const useProfile = () => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const token = useSelector((state : RootState) => state.user.token);

  const profile = async () : Promise<void> => {
    try {
      const response : AxiosResponse<ProfileResponse> = await api.post('/api/v1/user/profile', null, {
        headers: { Authorization: `Bearer ${token}`}
      });
      const { firstName, lastName, userName } = response.data.body;
      setFirstName(firstName);
      setLastName(lastName);
      setUserName(userName);
    } catch (error) {
      setHasError(true);
      console.log(error);
    }
  };

  return {
    profile,
    firstName,
    lastName,
    userName,
    hasError
  }
}