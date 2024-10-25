import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';

// base url
const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const useEditName = () => {
  const [hasError, setHasError] = useState<boolean>(false);
  const token = useSelector((state : RootState) => state.user.token);

  const editName = async (newFirstName: string, newLastName: string, newUserName: string) => {
    try {
      await api.put('/api/v1/user/profile', {
        firstName: newFirstName,
        lastName: newLastName,
        userName: newUserName,
      }, {
        headers: { Authorization: `Bearer ${token}`}
      });
    } catch (error) {
      setHasError(true);
    }
  };

  return {
    editName,
    hasError
  }
}