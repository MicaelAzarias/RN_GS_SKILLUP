import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storedUser = await AsyncStorage.getItem('@SkillUpPlus:user');
        if (storedUser) {
          setUserProfile(JSON.parse(storedUser));
          setIsLoggedIn(true);
        }
      } catch (e) {
        console.log('Erro ao carregar dados', e);
      }
      setIsLoading(false);
    }
    loadStorageData();
  }, []);

  const signIn = async (email, pass) => {

    if (email && email.includes('@') && pass && pass.length > 3) {
      const profile = { name: 'Usuário SkillUp', email: email };
      await AsyncStorage.setItem('@SkillUpPlus:user', JSON.stringify(profile));
      setUserProfile(profile);
      setIsLoggedIn(true);
    } else {

      throw new Error('Digite um email válido (com @) e senha.');
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('@SkillUpPlus:user');
    setUserProfile(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userProfile, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}