import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>First App Journault</Text>
        </View>
        <View style={styles.clicks}>
          <TouchableOpacity style={styles.textBtn} onPress={this.onPress}>
            <Text>Click me</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>You clicked {this.state.count} times</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    padding: 10,
    margin: 10,
    backgroundColor: 'cyan',
    alignItems: 'center',
    borderRadius: 7,
    color: 'cyan',
  },
  titleContainer: {
    color: 'cyan',
    flex: 1,
    marginTop: 10,
  },
  clicks: {
    flex: 1,
  },
  title: {
    color: 'cyan',
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: '900',
  },
  text: {
    color: 'cyan',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '900',
  },
});

export default App;
