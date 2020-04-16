import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import styles from "./ArtPieceScreenStyles";

class ArtPieceScreen extends React.Component {



    onSwipe(gestureName, navigation) {
     const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
     //this.setState({gestureName: gestureName});
     switch (gestureName) {
       case SWIPE_UP:
         console.log("UP")
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
            onSwipe={(direction, state) => onSwipe(direction, navigation )}
            onSwipeRight={(direction) => onSwipeRight(direction, navigation)}
        >
                <View>
                    <Text style={styles.sectionName}>
                      Art Piece Screen
                    </Text>
                    <View style = {styles.column}>
                        <Image
                          source={require('../../assets/images/Apollo-and-Daphne.png')}
                        />
                        <Text style = {styles.bodyText}>
                          Title: Apollo and Daphne
                          Medium: oil on canvas
                          Dimensions: 24 3/8 in. by 19 1/4 in.
                        </Text>
                    </View>
                </View>
        </GestureRecognizer>
        )
    }
}