import { DrawerNavigator,StackNavigator,NavigationActions } from 'react-navigation';
import { Button,Icon } from 'react-native-elements';
import React, { Component } from 'react';
import MainScreen from '../screen/college/main';
import AboutUsScreen from '../screen/college/about_us';
import ProgrammesScreen from '../screen/college/programmes';
import StudentLifeScreen from '../screen/college/student_life';
import ContactUsScreen from '../screen/college/contact_us';
import SentralNewsScreen from '../screen/college/sentral_news';
import MainRoute from './route';

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

const BackToMain = NavigationActions.reset({
  index: 0,
  actions: [
	   NavigationActions.navigate({ routeName: 'MainRoute'})
  ]
});

const newMainScreen = StackNavigator(
  {
    Home: {
      path: '/college',
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <Icon name="menu" color='white' size={35} onPress={ () => navigation.dispatch(BackToMain) } />,
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'College Info',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    AboutUsStack: {
      path: '/college/about-us',
      screen: AboutUsScreen,
      navigationOptions: ({ navigation }) => ({
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'About Us',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    ProgrammesStack: { 
      path: '/college/programmes',
      screen: ProgrammesScreen,
      navigationOptions: ({ navigation }) => ({
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'Programmes',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    StudentLifeStack: {
      path: '/college/student-life',
      screen: StudentLifeScreen,
      navigationOptions: ({ navigation }) => ({
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'Student Life',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    ContactUsStack: {
      path: '/college/contact-us',
      screen: ContactUsScreen,
      navigationOptions: ({ navigation }) => ({
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'Contact Us',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    SentralNewsStack: {
      path: '/college/sentral-news',
      screen: SentralNewsScreen,
      navigationOptions: ({ navigation }) => ({
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'Sentral News',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },

    //PREVIOUS routes

  }
);

const DrawerNavigation = DrawerNavigator(
  {
    Home: {
      path: '/college',
      screen: newMainScreen,
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
