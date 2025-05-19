import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ContextScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light', // Estado inicial do tema
    };
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { theme } = this.state;

    const containerStyle =
      theme === 'light' ? styles.lightContainer : styles.darkContainer;
    const textStyle =
      theme === 'light' ? styles.lightText : styles.darkText;
    const buttonStyle =
      theme === 'light' ? styles.darkButton : styles.lightButton;
    const buttonTextStyle =
      theme === 'light' ? styles.darkButtonText : styles.lightButtonText;

    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.text, textStyle]}>Tela de Contexto</Text>
        <Text style={[styles.text, textStyle]}>Tema atual: {theme}</Text>

        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={this.toggleTheme}>
          <Text style={[styles.buttonText, buttonTextStyle]}>Alternar Tema</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, buttonStyle]}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={[styles.buttonText, buttonTextStyle]}>Voltar</Text>
        </TouchableOpacity>
      </View>
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
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 10,
  },
  darkButton: {
    backgroundColor: '#333',
    borderColor: '#333', 
  },
  lightButton: {
    backgroundColor: '#f0f0f0', 
    borderColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  darkButtonText: {
    color: '#f0f0f0', 
  },
  lightButtonText: {
    color: '#333',
  },
});

export default ContextScreen;