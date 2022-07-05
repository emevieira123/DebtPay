/* eslint-disable react/prop-types */
import Router from 'next/router';
import { setCookie, parseCookies } from 'nookies';
import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { URLS } from '../services/URLS';

type User = {
  name: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { idUser: id } = parseCookies();
    console.log(id);
    api
      .get(URLS.USERS + `/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function signIn({ email, password }: SignInData) {
    const {
      data: { accessToken, user },
    } = await api.post(URLS.LOGIN, JSON.stringify({ email, password }), {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: false,
    });

    setCookie(undefined, 'debtpay.token', accessToken, {
      maxAge: 60 * 60 * 1, // 60 minutes
    });
    setCookie(undefined, 'idUser', user.id, {
      maxAge: 60 * 60 * 1, // 60 minutes
    });

    api.defaults.headers['Authorization'] = `Bearer ${accessToken}`;

    setUser(user);

    Router.push(URLS.DEBT);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
