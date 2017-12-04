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
  ListView
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
        <ScrollView>
          <Image style={[styles.fullImage]}
            //resizeMode="contain"
            source={require('../../../assets/Sentral/banner3.png')}
          />
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',padding:10}}>
            <TouchableHighlight
              underlayColor='#ECEFF1'
              onPress={() => alert('hello')}>
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
              onPress={() => alert('hello')}>
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
              onPress={() => alert('hello')}>
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
              onPress={() => alert('hello')}>
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


            <TouchableHighlight
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
            </TouchableHighlight>

            <TouchableHighlight
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
            </TouchableHighlight>

            <TouchableHighlight
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
            </TouchableHighlight>

            <TouchableHighlight
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
            </TouchableHighlight>

            <TouchableHighlight
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
            </TouchableHighlight>







            <Button
              backgroundColor={global.SentralGreen}
              icon={{name: 'three-bars', type: 'octicon'}}
              title='View More News'
              onPress={() => alert('View More News')}
            />

          </View>

        </ScrollView>

     )

  }
}
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
  }

});
