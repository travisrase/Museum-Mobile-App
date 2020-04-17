import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import styles from "./ArtPieceScreenStyles";
import { Dimensions } from 'react-native';

class ArtPieceScreen extends React.Component {

  //store piece title etc as variables
  //make this class a type of interface? not sure proper term
  //so that it can be replicated


    onSwipe(gestureName, navigation) {
     const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
     //this.setState({gestureName: gestureName});
     switch (gestureName) {
       case SWIPE_UP:
         console.log("UP")
         navigation.navigate('Home')
         // this.setState({backgroundColor: 'red'});
         break;
       case SWIPE_DOWN:
         console.log("DOWN")
         //  this.setState({backgroundColor: 'green'});
         break;
       case SWIPE_LEFT:
         console.log("LEFT")
         //this.setState({backgroundColor: 'blue'});
         break;
       case SWIPE_RIGHT:
         navigation.navigate('RoomOverview')
         break;
     }
    }

    render(){
        return(
            <GestureRecognizer
            onSwipe={(direction, state) => this.onSwipe(direction, this.props.navigation )}
            //onSwipeRight={(direction) => onSwipeRight(direction, navigation)}
        >       
        <View>
          <Text style = {styles.header}>
            Title
          </Text>
                <View style = {styles.columnLayout}>
                <Image style = {styles.image}
                          source={require('../../assets/images/Apollo-and-Daphne.png')}
                          /> 
                    <View style = 
                      {{position: 'relative', top: '50%'}}>
                    <Text style = {styles.bodyText}>
                            Title: Apollo and Daphne
                    </Text> 
                    <Text style = {styles.bodyText}>
                            Medium: oil on canvas
                    </Text>
                    <Text style = {styles.bodyText}>
                            Dimensions: 24 3/8 in. by 19 1/4 in.
                    </Text>
                    </View>
                </View>
          </View>
        </GestureRecognizer>
        )
    }
}

export default ArtPieceScreen;