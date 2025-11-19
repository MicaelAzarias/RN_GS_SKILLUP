import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import { progressStyles as styles } from '../styles/styles';

const progressData = [
  { title: 'Trilha de IA', progress: 0.75, color: '#4caf50' },
  { title: 'Gestão Ágil', progress: 0.4, color: '#2196f3' },
  { title: 'Soft Skills', progress: 0.9, color: '#ff9800' },
  { title: 'React Native', progress: 0.2, color: '#9c27b0' },
];

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Meu Desempenho</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Horas</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>4</Text>
          <Text style={styles.statLabel}>Cursos</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Certificados</Text>
        </View>
      </View>
      
      <Text style={styles.sectionHeader}>Em Andamento</Text>
      <View style={styles.card}>
        {progressData.map((item, index) => (
          <View key={index} style={styles.progressItem}>
            <View style={styles.progressLabelRow}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.percentage}>{(item.progress * 100).toFixed(0)}%</Text>
            </View>
            <ProgressBar progress={item.progress} color={item.color} />
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>Conquistas Recentes</Text>
      <View style={styles.certificateCard}>
        <View style={styles.certRow}>
          <Text style={styles.medal}>🥇</Text>
          <View>
            <Text style={styles.certTitle}>Mestre da Comunicação</Text>
            <Text style={styles.certDate}>Concluído em 10/11/2025</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.certRow}>
          <Text style={styles.medal}>🥈</Text>
          <View>
            <Text style={styles.certTitle}>Fundamentos de IoT</Text>
            <Text style={styles.certDate}>Concluído em 05/11/2025</Text>
          </View>
        </View>
      </View>
      <View style={{ height: 30 }} />
    </ScrollView>
  );
}