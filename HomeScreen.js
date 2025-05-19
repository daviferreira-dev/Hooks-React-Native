import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log('Componente HomeScreen montado. Contador:', this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Componente HomeScreen atualizado. Contador:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Componente HomeScreen desmontado.');
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  focusInput = () => {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tela Inicial</Text>
        <Text style={styles.counter}>Contador: {this.state.count}</Text>
        <Button title="Incrementar Contador" onPress={this.incrementCount} />

        <TextInput
          style={styles.input}
          placeholder="Digite algo aqui"
          ref={this.inputRef}
        />
        <Button title="Focar Input" onPress={this.focusInput} />

        <Button
          title="Ir para Tela de Contexto"
          onPress={() => this.props.navigation.navigate('ContextScreen')}
        />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default HomeScreen;