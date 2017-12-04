
import React from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';

//Put the screen required
import MainScreen from '../screen/main';
//College
import College from '../screen/college/main';
//Student Portal
import Student from '../screen/student/main';
//Login

//QR Code


export const MainStackNav = StackNavigator({
  MainScreen:{
	  screen: MainScreen,
	  navigationOptions: {
  		title: 'SENTRAL College Penang',
  		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#1a5b4c'
      },
	  },
  },
  College: {
    screen: College,
    navigationOptions: {
  		title: 'College Info',
  		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#1a5b4c'
      },
	  },
  },
  /*
  StudentPortal: {
    screen: Student,
  }, */
/*   Login: {
    screen: Screen3,
  },
  QR: {
    screen: Screen3,
  }, */
  },
  {
	//mode: 'modal',
	//headerMode: 'none',
  }
);
