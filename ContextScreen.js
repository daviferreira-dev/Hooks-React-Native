import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Criação do Contexto de Tema (pode estar em um arquivo separado)
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Provider do Contexto (em um arquivo separado)
class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

class ContextScreen extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => {
          const themedStyles = {
            container: [
              styles.container,
              theme === 'dark' ? styles.darkContainer : styles.lightContainer,
            ],
            text: [
              styles.text,
              theme === 'dark' ? styles.darkText : styles.lightText,
            ],
            // Simulação de valor memoizado (não é um 'useMemo' direto)
            memoizedValue: theme === 'dark' ? 'O tema é escuro' : 'O tema é claro',
          };

          return (
            <View style={themedStyles.container}>
              <Text style={themedStyles.text}>Tela de Contexto</Text>
              <Text style={themedStyles.text}>Tema atual: {theme}</Text>
              <Text style={themedStyles.text}>Valor "memoizado": {themedStyles.memoizedValue}</Text>
              <Button title="Alternar Tema" onPress={toggleTheme} />
              <Button
                title="Voltar para Tela Inicial"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#f0f0f0',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  lightText: {
    color: '#333',
  },
  darkText: {
    color: '#f0f0f0',
  },
});

export { ThemeProvider, ContextScreen };