# 🚀 SkillUpPlus 2030+ (Global Solution - FIAP 2025.2)

Integrantes:
 
Felipe meguime Nakama - RM: 552821

Eduardo Mazelli - RM: 553236

Micael Santos Azarias - RM: 552699

Turma: 3espa - Engenharia de Software

**Mobile Development & IoT | Engenharia de Software**

O **SkillUpPlus 2030+** é uma solução móvel desenvolvida para enfrentar os desafios do **Futuro do Trabalho** e da **Requalificação Digital**. Alinhado aos ODS da ONU (4, 8, 9 e 10), o aplicativo conecta usuários a trilhas de aprendizado rápidas e personalizadas, permitindo monitorar o progresso e desenvolver novas competências em um mercado em constante transformação.

---

## 📱 Funcionalidades Principais

* **Navegação Híbrida:** Utilização integrada de **Stack**, **Drawer** (Menu Lateral) e **Bottom Tabs** (Abas Inferiores) para uma experiência de usuário fluida.
* **Autenticação & Persistência:** Sistema de login simulado com persistência de dados (o usuário permanece logado mesmo ao fechar o app) utilizando `AsyncStorage`.
* **Busca Dinâmica:** Filtragem de cursos e trilhas em tempo real na tela inicial.
* **Monitoramento de Progresso:** Visualização gráfica do desempenho do aluno através de componentes personalizados (Barra de Progresso).
* **Perfil de Usuário:** Gerenciamento de dados e preferências de área de interesse.

---

## 🔑 Credenciais de Acesso (Login)

Para acessar o aplicativo, o sistema de validação segue regras específicas implementadas no código. Você pode usar **qualquer** credencial que atenda aos critérios abaixo:

### Regras de Validação:
1.  **E-mail:** Deve conter obrigatoriamente o caractere `@`.
2.  **Senha:** Deve conter **mais de 3 caracteres** (mínimo 4 dígitos).

### 💡 Sugestão para Teste:
Caso queira testar rapidamente, utilize os dados abaixo:

* **E-mail:** `aluno@fiap.com`
* **Senha:** `123456`

> **Nota:** Se as regras não forem atendidas, o app exibirá um erro e não permitirá o acesso.

---

## 🛠️ Tecnologias Utilizadas

* **React Native** (Expo Framework)
* **React Navigation v6** (Stack, Drawer, Bottom Tabs)
* **Async Storage** (Persistência de dados local)
* **Context API** (Gerenciamento de estado global de autenticação)
* **Hooks** (useState, useEffect, useContext)

---

* ## 🚀 Instalação e Dependências

O projeto já possui as dependências listadas no `package.json`. Para instalar todas automaticamente, execute:

```bash
npm install

----------------------

Caso precise instalar as bibliotecas manualmente, os comandos utilizados foram:

npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
npm install @react-native-async-storage/async-storage
npm install @react-native-picker/picker
