import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import styles from "./ArtPieceScreenStyles";

class HomeScreen extends React.Component {



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
         navigation.navigate('RoomOverview')
         //  this.setState({backgroundColor: 'blue'});
         break;
       case SWIPE_RIGHT:
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
                    <DoubleClick
                        singleTap={() => {
                            console.log("single tap");
                        }}
                        doubleTap={() => onDoubleTap(navigation)}
                        delay={200}
                    >
                    <Text>Art Piece Screen</Text>
                    </DoubleClick>
                </View>
        </GestureRecognizer>
        )
    }
}