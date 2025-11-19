import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAuth } from '../context/AuthContext';
import { profileStyles as styles } from '../styles/styles';

export default function ProfileScreen() {
  const { userProfile, signOut } = useAuth();
  const [areaInteresse, setAreaInteresse] = useState('Gestao');

  const handleLogout = () => {
    Alert.alert(
      "Sair do App",
      "Tem certeza que deseja deslogar?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sair", onPress: signOut, style: "destructive" }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de {userProfile?.name || 'Usuário'}</Text>
      <Text style={styles.email}>{userProfile?.email}</Text>
      
      <Text style={styles.label}>Principal área de interesse:</Text>
      
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={areaInteresse}
          onValueChange={(itemValue) => setAreaInteresse(itemValue)}
        >
          <Picker.Item label="Inteligência Artificial" value="IA" />
          <Picker.Item label="Gestão de Projetos" value="Gestao" />
          <Picker.Item label="Sustentabilidade" value="Sustentabilidade" />
          <Picker.Item label="Soft Skills" value="SoftSkills" />
          <Picker.Item label="Desenvolvimento Mobile" value="Mobile" />
        </Picker>
      </View>

  
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair do App</Text>
      </TouchableOpacity>

    </View>
  );
}