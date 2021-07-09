import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [header, setHeader] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  // funcao para salvar os dados do usuario no async storage
  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  // funcao para salvar os headers, para fazer as outras req
  async function headerUser(dataHeader) {
    await AsyncStorage.setItem('Header_user', JSON.stringify(dataHeader));
  }

  // conferindo se tem algum usuario logado
  useEffect(() => {
    async function loadStorage() {
      const storageUserData = await AsyncStorage.getItem('Auth_user');
      const storageHeader = await AsyncStorage.getItem('Header_user');

      if (storageUserData) {
        setUser(JSON.parse(storageUserData));

        if (storageHeader) {
          setHeader(JSON.parse(storageHeader));
        }
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  // funcao de logar
  function signIn(email, password) {
    setLoadingAuth(true);

    const data = {
      email,
      password
    };

    api
      .post(`api/v1/users/auth/sign_in`, data, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(async value => {
        const dataHeader = {
          access_token: value.headers['access-token'],
          uid: value.headers.uid,
          client: value.headers.client
        };
        setHeader(dataHeader);
        headerUser(dataHeader);
        // console.log(dataHeader)

        const storageData = value.data;
        setUser(storageData);
        storageUser(storageData);

        setLoadingAuth(false);
      })
      .catch(error => {
        setLoadingAuth(false);
        // eslint-disable-next-line no-console
        console.log(error);
        Alert.alert('Não foi possível fazer o login tente novamente 😢!');
      });
  }

  // funcao de deslogar
  async function signOut() {
    setLoadingAuth(true);
    await AsyncStorage.clear().then(() => {
      setUser(null);
      setLoadingAuth(false);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        header,
        loading,
        loadingAuth,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};
