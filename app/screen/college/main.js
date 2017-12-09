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
  Menu,
  TouchableOpacity
} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { DrawerNavigator, NavigationActions } from 'react-navigation';

import CollegeSideMenu from '../../menu/college/menu';




const longtext = "The Seminar Digital Kerajaan 2017 was organized to share knowledge, ideas and experiences towards improving the delivery system of government services through the ";
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  iconText: {
    alignSelf: 'center',
    fontSize: 11,
  },
  container_SentralNews: {
    marginTop:20,
    marginBottom:20,
    marginLeft:10,
    marginRight:10,
  },
  text_SentralNews: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom:10,
  },

});


var News = ['1':'1', '2':'2', '3':'3','4':4,'5':5,'6':6,'7':7,'8':8,'9':9];
var NewsList = News.map(function(New,key){
                return <TouchableHighlight
                        style={{ marginBottom:10 }}
                        underlayColor='#ECEFF1'
                        onPress={() => alert('hello')} >
                        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
                          <Text style={{flex:0.6,paddingRight:5}}>{longtext}</Text>
                          <Image
                            style={{flex:0.4,resizeMode: "contain",height:125  }}
                              source={require('../../../assets/Sentral/news1.jpg')}
                          />
                        </View>
                      </TouchableHighlight>;
               });


class MainContent extends React.Component {

 render() {
   return (
     <ScrollView>
       <Image style={[styles.fullImage]}
         //resizeMode="contain"
         source={require('../../../assets/Sentral/banner3.png')}
       />
       <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',padding:10}}>
         <TouchableHighlight
           underlayColor='#ECEFF1'
           onPress={() => this.props.navigation.navigate('AboutUsStack')}>
           <View>
             <Icon
               raised
               name='500px'
               type='font-awesome'
               color={global.SentralGreen}
             />
             <Text style={styles.iconText}>About Us</Text>
           </View>
         </TouchableHighlight>

         <TouchableHighlight
           underlayColor='#ECEFF1'
           onPress={() =>  this.props.navigation.navigate('ProgrammesStack')}>
           <View>
             <Icon
               raised
               name='500px'
               type='font-awesome'
               color={global.SentralGreen}
             />
             <Text style={styles.iconText}>Programmes</Text>
           </View>
         </TouchableHighlight>

         <TouchableHighlight
           underlayColor='#ECEFF1'
           onPress={() =>  this.props.navigation.navigate('StudentLifeStack')}>
           <View>
             <Icon
               raised
               name='500px'
               type='font-awesome'
               color={global.SentralGreen}
             />
             <Text style={styles.iconText}>Student Life</Text>
           </View>
         </TouchableHighlight>

         <TouchableHighlight
           underlayColor='#ECEFF1'
           onPress={() =>  this.props.navigation.navigate('ContactUsStack')}>
           <View>
             <Icon
               raised
               name='500px'
               type='font-awesome'
               color={global.SentralGreen}
             />
             <Text style={styles.iconText}>Contact Us</Text>
           </View>
         </TouchableHighlight>
       </View>

       <View style={styles.container_SentralNews}>
         <Text style={styles.text_SentralNews}>SENTRAL News</Text>

         { NewsList }

         <Button
           backgroundColor={global.SentralGreen}
           icon={{name: 'three-bars', type: 'octicon'}}
           title='View More News'
           onPress={() =>  this.props.navigation.navigate('SentralNewsStack')}
         />

       </View>

     </ScrollView>
   );
 }
}



export default MainContent;
