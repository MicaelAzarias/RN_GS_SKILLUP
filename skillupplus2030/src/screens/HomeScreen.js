import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { homeStyles as styles } from '../styles/styles'; // Importa estilos da Home

const allTrails = [
  { id: '1', title: 'IA para Iniciantes', area: 'IA', icon: '🧠', description: 'Fundamentos de Redes Neurais' },
  { id: '2', title: 'Gestão Ágil 3.0', area: 'Gestão', icon: '🚀', description: 'Scrum e Kanban avançados' },
  { id: '3', title: 'Sustentabilidade Corp.', area: 'Sustentabilidade', icon: '🌿', description: 'ESG nas empresas' },
  { id: '4', title: 'Comunicação Não-Violenta', area: 'Soft Skills', icon: '💬', description: 'Melhore seus relacionamentos' },
  { id: '5', title: 'React Native Avançado', area: 'Dev', icon: '📱', description: 'Animações e Performance' },
  { id: '6', title: 'IoT na Indústria 4.0', area: 'IoT', icon: '🤖', description: 'Sensores e Automação' },
];

export default function HomeScreen() {
  const { userProfile } = useAuth();
  const [searchText, setSearchText] = useState('');

  const filteredTrails = allTrails.filter(trail => 
    trail.title.toLowerCase().includes(searchText.toLowerCase()) ||
    trail.area.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Olá, {userProfile?.name || 'Visitante'}</Text>
        <Text style={styles.subHeader}>O que você quer aprender hoje?</Text>
        <TextInput 
          style={styles.searchInput}
          placeholder="🔍 Buscar cursos ou áreas..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Trilhas Disponíveis</Text>
        
        {filteredTrails.map((trail) => (
          <TouchableOpacity key={trail.id} style={styles.card}>
            <View style={styles.iconContainer}>
              <Text style={styles.cardIcon}>{trail.icon}</Text>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{trail.title}</Text>
              <Text style={styles.cardArea}>{trail.area}</Text>
              <Text style={styles.cardDesc}>{trail.description}</Text>
            </View>
            <Text style={styles.arrow}>➔</Text>
          </TouchableOpacity>
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}