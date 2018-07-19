import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 25,
    borderColor: 'lightblue',
  },
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 25,
    borderColor: 'lightgreen',
  },
});

class ScreenComponentHome extends React.Component {
  render() {
    return (
      <View style={styles.home}>
        <Button 
          title="Login"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}

class ScreenComponentLogin extends React.Component {
  render() {
    return (
      <View style={styles.login}>
        <Button 
          title="Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  "Home": ScreenComponentHome,
  "Login": ScreenComponentLogin,
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}


