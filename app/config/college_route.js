import { DrawerNavigator } from 'react-navigation';
import { Button,Icon } from 'react-native-elements';
import React, { Component } from 'react';
import MainScreen from '../screen/college/main';
import AboutUsScreen from '../screen/college/about_us';
import ProgrammesScreen from '../screen/college/programmes';
import StudentLifeScreen from '../screen/college/student_life';
import ContactUsScreen from '../screen/college/contact_us';
import SentralNewsScreen from '../screen/college/sentral_news';

/*
const MainScreen = ({ navigation }) => (
  <MainContent />
);
const AboutUsScreen = ({ navigation }) => (
  <MainContent />
);
const ProgrammesScreen = ({ navigation }) => (
  <MainContent navigation={navigation}/>
);
const StudentLifeScreen = ({ navigation }) => (
  <MainContent navigation={navigation}/>
);
const ContactUsScreen = ({ navigation }) => (
  <MainContent navigation={navigation}/>
);
const SentralNewsScreen = ({ navigation }) => (
  <MainContent navigation={navigation}/>
);
*/


MainScreen.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ tintColor }) => (
    <Icon
    raised
    name='500px'
    type='font-awesome'
    color='#f50'
    />
  ),
};
AboutUsScreen.navigationOptions = {
  drawerLabel: 'About Us',
  drawerIcon: ({ tintColor }) => (
    <Icon
    raised
    name='500px'
    type='font-awesome'
    color='#f50'
    />
  ),
};
ProgrammesScreen.navigationOptions = {
  drawerLabel: 'Programmes',
  drawerIcon: ({ tintColor }) => (
    <Icon
    raised
    name='500px'
    type='font-awesome'
    color='#f50'
    />
  ),
};
StudentLifeScreen.navigationOptions = {
  drawerLabel: 'Student Life',
  drawerIcon: ({ tintColor }) => (
    <Icon
    raised
    name='500px'
    type='font-awesome'
    color='#f50'
    />
  ),
};
ContactUsScreen.navigationOptions = {
  drawerLabel: 'Contact Us',
  drawerIcon: ({ tintColor }) => (
    <Icon
    raised
    name='500px'
    type='font-awesome'
    color='#f50'
    />
  ),
};
SentralNewsScreen.navigationOptions = {
  drawerLabel: 'Sentral News',
  drawerIcon: ({ tintColor }) => (
    <Icon
    raised
    name='500px'
    type='font-awesome'
    color='#f50'
    />
  ),
};



 const DrawerNavigation = DrawerNavigator(
  {
    Home: {
      path: '/college',
      screen: MainScreen,
    },
    AboutUs: {
      path: '/college/about-us',
      screen: AboutUsScreen,
    },
    Programmes: {
      path: '/college/programmes',
      screen: ProgrammesScreen,
    },
    StudentLife: {
      path: '/college/student-life',
      screen: StudentLifeScreen,
    },
    ContactUs: {
      path: '/college/contact-us',
      screen: ContactUsScreen,
    },
    SentralNews: {
      path: '/college/sentral-news',
      screen: SentralNewsScreen,
    },

  },
  {
    initialRouteName: 'Home',
    drawerPosition :'right',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);


//Export Itself
export default class App extends Component<{}> {
  render(){
    return(
      <DrawerNavigation />
    );
  }
}
