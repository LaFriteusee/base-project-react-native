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
        <View style={styles.row}>
        <View style={styles.firstsquare}>
          <Text style={styles.numbersText}>1</Text>
        </View>
        <View style={styles.secondsquare}>
          <Text style={styles.numbersText}>2</Text>
        </View>
        <View style={styles.thirdsquare}>
          <Text style={styles.numbersText}>3</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.fourthsquare}>
          <Text style={styles.numbersText}>4</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.fifthsquare}>
          <Text style={styles.numbersText}>5</Text>
        </View>
        </View>
        <View style={styles.lastrow}> 
        <View style={styles.sixthsquare}>
          <Text style={styles.numbersText}>6</Text>
        </View>
        <View style={styles.seventhsquare}>
          <Text style={styles.numbersText}>7</Text>
        </View>
        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
  
  },
  numbersText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    
  },

  row: {
    flex: 1,
    flexDirection: 'row',    
    justifyContent: 'center',
  
   
   
  },

  lastrow: {
    flex: 5,
    flexDirection: 'row',    
    justifyContent: 'center',
   
    
  },
  firstsquare: {
    alignItems: 'center',
    justifyContent: 'center',
    flex :1,
    backgroundColor: 'cyan',
  },

  secondsquare: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:2,
    backgroundColor: '#FF33D2',
  },

  thirdsquare: {
    alignItems: 'center',
    justifyContent: 'center',   
    flex :3,
    backgroundColor: 'yellow',
  },

  fourthsquare: {
    alignItems: 'center',
    justifyContent: 'center',
    flex :1,
    backgroundColor: 'red',
  },

  fifthsquare: {
    alignItems: 'center',
    justifyContent: 'center',
    flex :1,
    backgroundColor: '#5EFF33',
  },

  sixthsquare: {
    alignItems: 'center',
    justifyContent: 'center',
    flex :1,
    backgroundColor: 'white',
  },

  seventhsquare: {
    alignItems: 'center',
    justifyContent: 'center',
    flex :1,
    backgroundColor: 'blue',
  },


});

export default App;
