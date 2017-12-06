/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  ListView,
  TextInput
} from 'react-native';
import { Button,Icon } from 'react-native-elements';

export default class App extends Component<{}> {

  college_info_function = () => {
    alert('College Function');
  }
  student_portal_function = () => {
    alert('Student Function');
  }
  login_function = () => {
    alert('Login Function');
  }

   render() {
     return (
      <View style={styles.container}>
        <View style={styles.login_container}>
        <Image style={[styles.fullImage]}
          resizeMode="contain"
          source={require('../../../assets/Sentral/logo.jpg')}
        />
        </View>
        <View style={styles.login_container}>
          <Text
            style={styles.input_text}>
            Student ID / Staff ID
          </Text>
          <TextInput
            style={styles.input_box}
          />

          <Text
            style={styles.input_text}>
            Password
          </Text>
          <TextInput
            style={styles.input_box}
          />

          <Button
            backgroundColor={global.SentralGreen}
            icon={{name: 'chevron-right', type: 'octicon'}}
            title='Login'
            onPress={() => alert('View More News')}
          />
        </View>
      </View>

     )

  }
}

const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width-82,
    height: 80,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  login_container: {
    width:'100%',
    padding:40,
  },
  input_box: {
    height: 40,
    borderWidth: 1,
    marginBottom:10,
    borderColor:'transparent',
    fontSize: 20
  },
  input_text: {
    fontSize: 20
  },

});
