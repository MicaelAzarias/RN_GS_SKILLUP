import { StyleSheet } from 'react-native';


// --- Estilos da Tela de Login ---
export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
  }
});



// --- Estilos da Tela Home (Início) ---
export const homeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingTop: 40, // Ajuste para status bar
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 15,
  },
  scrollContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 5,
    color: '#444',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#e3f2fd',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardArea: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 12,
    color: '#777',
  },
  arrow: {
    fontSize: 18,
    color: '#ccc',
  },
});



// --- Estilos da Tela de Progresso ---
export const progressStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  statBox: {
    backgroundColor: '#fff',
    width: '30%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007bff',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 10,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  progressItem: {
    marginBottom: 15,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  percentage: {
    fontSize: 12,
    color: '#666',
  },
  certificateCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  certRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  medal: {
    fontSize: 30,
    marginRight: 15,
  },
  certTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  certDate: {
    fontSize: 12,
    color: '#888',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
});



// --- Estilos do Componente ProgressBar ---
export const componentStyles = StyleSheet.create({
  track: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 5,
  },
  bar: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  progressText: {
    textAlign: 'right',
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
});

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#444',
    fontWeight: '500',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 50, 
  },


  // Estilo do Botão de Sair
  logoutButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});