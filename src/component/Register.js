import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet
} from 'react-native';

class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Register Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },

});
  
export default Register;