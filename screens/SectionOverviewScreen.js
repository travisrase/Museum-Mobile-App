import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import DoubleClick from "react-native-double-tap";

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
            navigation.navigate('ArtPiece')
            //  this.setState({backgroundColor: 'blue'});
            break;
        case SWIPE_RIGHT:
            navigation.navigate('Home')
            break;
    }
}
function onDoubleTap(navigation) {
    navigation.navigate('ArtPiece');
}

  


export default function SectionOverviewScreen() {
    return (
        <View>
            <DoubleClick
                        singleTap={() => {
                            console.log("single tap");
                        }}
                        doubleTap={() => onDoubleTap(navigation)}
                        delay={200}
                    >
                    <Text>Section Overview Screen</Text>
                    </DoubleClick>
        </View>

    )
}