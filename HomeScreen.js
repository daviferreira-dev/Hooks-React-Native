import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
// npm install expo-av 

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.inputRef = React.createRef();
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
        <Video
          source={require('./assets/videos/background.mp4')} 
          style={styles.backgroundVideo}
          resizeMode="cover"
          shouldPlay
          isLooping
          isMuted
        />
    
        <View style={styles.darkOverlay} />
    
        <View style={styles.overlay}>
          <Text style={styles.title}>Tela Inicial</Text>
          <Text style={styles.counter}>Contador: {this.state.count}</Text>
    
          <TouchableOpacity style={styles.button} onPress={this.incrementCount}>
            <Text style={styles.buttonText}>Incrementar Contador</Text>
          </TouchableOpacity>
    
          <TextInput
            style={styles.input}
            placeholder="Digite algo aqui"
            placeholderTextColor="#000"
            ref={this.inputRef}
          />
    
          <TouchableOpacity style={styles.button} onPress={this.focusInput}>
            <Text style={styles.buttonText}>Focar Input</Text>
          </TouchableOpacity>
    
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('ContextScreen')}
          >
            <Text style={styles.buttonText}>Ir para Tela de Contexto</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  counter: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  darkOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)', 
},

});

export default HomeScreen;