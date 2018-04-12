import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texts}>Open up App.js to start working on your app!</Text>
        <Text style={styles.texts}>Changes you make will automatically reload.</Text>
        <Text style={styles.texts}>Shake your phone to open the developer menu.</Text>
        <Text style={{color: '#6b8af8'}}>Haho Ferik and Bajuszok!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDCDCD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    color: '#f96b30',
  },
});
