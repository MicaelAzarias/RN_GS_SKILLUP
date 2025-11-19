import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { loginStyles as styles } from '../styles/styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha email e senha.');
      return;
    }

    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert('Falha no Login', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3030/3030248.png' }} 
      />
      <Text style={styles.title}>SkillUpPlus 2030+</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </View>
  );
}