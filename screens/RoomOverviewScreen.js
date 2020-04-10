import React from 'react';
import { View, Text} from 'react-native';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import GestureRecognizer, {swipeDirections} from "react-native-swipe-gestures";

function onSwipe(gestureName, navigation) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    //this.setState({gestureName: gestureName});
    switch (gestureName) {
        case SWIPE_UP:
            console.log("UP")
            // this.setState({backgroundColor: 'red'});
            break;
        case SWIPE_DOWN:
            console.log("DOWN")
            //  this.setState({backgroundColor: 'green'});
            break;
        case SWIPE_LEFT:
            console.log("LEFT")
            //  this.setState({backgroundColor: 'blue'});
            break;
        case SWIPE_RIGHT:
            navigation.navigate('Home')
            break;
    }
}

function onSwipeRight(direction, navigation) {
    navigation.navigate('Home');
}

export default function RoomOverviewScreen({ navigation }) {
    return (
        <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, navigation )}
            onSwipeRight={(direction) => onSwipeRight(direction, navigation)}
        >
            <Text>Room Screen</Text>
        </GestureRecognizer>
    )
}