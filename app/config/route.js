
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
//Put the screen required
import MainScreen from '../screen/main';
//College
//import College from '../screen/college/main';
import CollegeRoute from './college_route';
//Student Portal
import Student from '../screen/student/main';
//Login]
import Login from '../screen/login/main';
//QR Code

const tintColor = 'red';





export const MainStackNav = StackNavigator({
  MainScreen:{
	  screen: MainScreen,
	  navigationOptions: {
  		title: 'SENTRAL College Penang',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#1a5b4c'
      },
	  },
  },
  College: {
    screen: CollegeRoute,
    navigationOptions: ({ navigation }) => ({
      header:null,
      headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
  		title: 'College Info',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#1a5b4c'
      },
	  }),
  },
  /*
  StudentPortal: {
    screen: Student,
  }, */
  Login: {
    screen: Login,
	  navigationOptions: {
  		title: 'Login',
  		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#1a5b4c'
      },
    },
  },
  /*
  QR: {
    screen: Screen3,
  }, */
  },
  {
	//mode: 'modal',
	//headerMode: 'none',

  }
);



const styles = StyleSheet.create({
  sideMenuBtn:{
    padding:10,
  },

});
